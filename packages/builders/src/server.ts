import * as express from "express";
import { lookup } from "dns";
import { hostname } from "os";
import { appBuilder } from "./app";
import { tenantBuilder } from "./tenant";

const PORT = 3004;

export function startServer() {
  let addr = "";

  lookup(hostname(), (_, address, __) => {
    addr = address;
  });

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

  server.listen(PORT, () => {
    console.log(`Listening on ${addr}:${PORT}`);
  });
}
