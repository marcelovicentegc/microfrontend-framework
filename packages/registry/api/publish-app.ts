import { VercelRequest, VercelResponse } from "@vercel/node";
import { publish } from "libnpmpublish";
import { Sentry } from "../middleware";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");

    return res;
  }

  const { manifest, tarData } = req.body;

  // TOOD: Only allowed client to post to this route is the @mf-framework/cli: add API Key authentication.

  try {
    await publish(manifest, tarData, {
      token: process.env.TOKEN,
    });
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }

  res.setHeader("Content-Type", "application/json");
  res.status(201).json("CREATED");

  return res;
};
