import { Router } from "express";
import { registerUser } from "../controlleres/user.controllers.js";

const router  = Router()

router.route("/register").post(registerUser)


export default router