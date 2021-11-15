import { VercelRequest, VercelResponse } from "@vercel/node";
import { registry } from "../clients";

export default async (req: VercelRequest, res: VercelResponse) => {
  const app = req.body;

  // Validate, build and save on registry

  registry.post("/save", {
    app,
  });

  res.send("OK");
  return res;
};
