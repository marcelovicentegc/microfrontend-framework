import { registry } from "../clients";
import { router } from "../router";

router.post("/", async (req, res) => {
  const app = req.body;

  // Validate, build and save on registry

  registry.post("/save", {
    app,
  });

  res.send("OK");
});

export default router;
