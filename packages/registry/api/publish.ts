import { VercelRequest, VercelResponse } from "@vercel/node";
import { Sentry } from "../middleware";
import { firebase } from "../clients";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");

    return res;
  }

  const {
    data: { manifest, appConfig, tarData },
  } = req.body;

  // TOOD: Add API key authentication.

  try {
    const app = `${manifest.name.replace("/", "-")}@${manifest.version}`;
    const bucket = `mf-framework/${app}`;

    const storage = getStorage(firebase);
    const manifestRef = ref(storage, `${bucket}/package.json`);
    const appConfigRef = ref(storage, `${bucket}/mf-config.ts`);
    const tarRef = ref(storage, `${bucket}/${app}.zip`);

    await Promise.all([
      uploadString(manifestRef, JSON.stringify(manifest)),
      uploadString(appConfigRef, appConfig),
      uploadBytes(tarRef, new Uint8Array(tarData.data)),
    ]);
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
};
