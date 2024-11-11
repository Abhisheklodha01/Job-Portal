import { Router } from "express";
import {
  ForgotPasswordController,
  GetUserProfileController,
  Logincontroller,
  Registercontroller,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { searchJob } from "../controllers/jobs.controller.js";

const router = Router();

router.post("/signup", Registercontroller);
router.post("/login", Logincontroller);
router.put("/forgot-password", ForgotPasswordController);
router.get("/user-profile", isAuthenticated, GetUserProfileController);
router.get("/jobs", searchJob)


export default router