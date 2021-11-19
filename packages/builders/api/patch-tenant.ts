import { VercelRequest, VercelResponse } from "@vercel/node";
import { composeCreatePullRequest } from "octokit-plugin-create-pull-request";
import { octokit, registry } from "../clients";
import { v4 as uuid } from "uuid";
import AdmZip from "adm-zip";
import axios from "axios";

const REPO = { owner: "marcelovicentegc", repo: "microfrontend-framework" };

async function handleZipDownload(url: string, tenant: string) {
  const response = await axios({
    url,
    method: "GET",
    responseType: "arraybuffer",
  });

  const zip = new AdmZip(response.data);
  const entries = zip.getEntries();

  const jsonRepresentation: any = {};

  for (const entry of entries) {
    const { entryName, getDataAsync, isDirectory } = entry;

    if (isDirectory) {
      continue;
    }

    await new Promise(function (resolve, reject) {
      try {
        getDataAsync(function (data) {
          jsonRepresentation[`examples/${tenant}/${entryName}`] =
            data.toString("utf-8");

          resolve(1);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  return jsonRepresentation;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");

    return res;
  }

  const {
    data: { app, tenant },
  } = req.body;

  const { data } = await registry.get(`/app?name=${app}`);

  const appJsonRepresentation = await handleZipDownload(
    data.downloadUrl,
    tenant
  );

  try {
    const response = await composeCreatePullRequest(octokit, {
      ...REPO,
      title: `Install ${app} on ${tenant}`,
      body: `# THIS IS AN AUTOMATED PULL REQUEST.\n This pull request addresses:\n - App ${app} installion on tenant ${tenant}. \n\n> Note that we're creating PRs just for the sake of keeping this repository clean. On a real-world application, the merge should be automated, once human review of app updates for possibly thousands of tenants wouldn't be humanly possible.`,
      base: "main",
      // UUID here is to prevent from throwing an error in case
      // the head branch exists.
      head: `${tenant}-${uuid()}`,
      changes: [
        {
          files: appJsonRepresentation,
          commit: `$chore(tenant:${tenant}): install ${app}`,
        },
      ],
    });

    if (!response) {
      res.status(502).end("Bad Gateway");

      return res;
    }

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({
      message: `Pull request #${response.data.number} successfully created. Visit it at ${response.data.html_url}`,
    });
  } catch (error) {
    throw error;
  }

  return res;
}
