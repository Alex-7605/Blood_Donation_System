import { Router } from "express";
import AuthController from "./auth.controller.js";
import authenticate from "../../middleware/authenticate.js";

const router = Router();

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.post("/logout", authenticate, AuthController.logout);

router.get("/me", authenticate, AuthController.me);

export default router;