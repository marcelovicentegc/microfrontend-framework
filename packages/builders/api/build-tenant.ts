import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (_: VercelRequest, res: VercelResponse) => {
  res.send("OK");

  return res;
};
