import { router } from "../router";

router.post("/", async (_, res) => {
  res.send("OK");
});

export default router;
