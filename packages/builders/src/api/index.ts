import * as express from "express";
import { appBuilder } from "../app";
import { tenantBuilder } from "../tenant";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(appBuilder);
server.use(tenantBuilder);

server.get("/", async (_, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json("OK");

  return res;
});

server.use((_, res) => {
  res.status(404).end("Not Found");
  return res;
});

export default server;
