import { router } from "../router";

router.post("/build-tenant/:tenant", async (_, res) => {
  res.send("OK");
});

export { router as tenantBuilder };
