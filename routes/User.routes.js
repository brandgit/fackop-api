import { Router } from "express";

import * as userControllers from "../controllers/User.controllers.js";

const router = Router();

router.route("/api/user/registeruser").post(userControllers.registerUser);
router
  .route("/api/user/registernewslatter/")
  .post(userControllers.registerNewslatter);

export default router;
