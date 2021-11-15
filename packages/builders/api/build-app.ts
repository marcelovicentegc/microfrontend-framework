import { VercelRequest, VercelResponse } from "@vercel/node";
import { registry } from "../clients";

export default async (req: VercelRequest, res: VercelResponse) => {
  const app = req.body;

  // Validate, build and save on registry

  registry.post("/save", {
    app,
  });

  res.setHeader("Content-Type", "application/json");
  res.status(200).json("OK");

  return res;
};
