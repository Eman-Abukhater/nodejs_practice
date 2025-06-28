import express from "express";
import { userLoginController } from "./controller.js";
const router = express.Router();

router.get("/login", userLoginController);

export default router;