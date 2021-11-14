import { router } from "../router";

router.post("/build-app", async (_, res) => {
  res.send("OK");
});

export { router as appBuilder };
