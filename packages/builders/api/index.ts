import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (_: VercelRequest, res: VercelResponse) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("OK");

  return res;
};
