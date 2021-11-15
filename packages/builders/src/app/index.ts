import { registry } from "../clients";
import { router } from "../router";

router.post("/build-app", async (req, res) => {
  const app = req.body;

  // Validate, build and save on registry

  registry.post("/save", {
    app,
  });

  res.send("OK");
});

export { router as appBuilder };
