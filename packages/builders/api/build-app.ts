import { VercelRequest, VercelResponse } from "@vercel/node";
import { registry } from "../clients";

export default async (req: VercelRequest, res: VercelResponse) => {
  const app = req.body;

  console.log({ app });

  try {
    await registry.post("/save", {
      app,
    });
  } catch (error) {
    throw error;
  }

  res.setHeader("Content-Type", "application/json");
  res.status(200).json("OK");

  return res;
};
