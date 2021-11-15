// Development only
import { lookup } from "dns";
import { hostname } from "os";
import server from "./api";

const PORT = 3004;

let addr = "";

lookup(hostname(), (_, address, __) => {
  addr = address;
});

server.listen(PORT, () => {
  console.log(`Listening on ${addr}:${PORT}`);
});
