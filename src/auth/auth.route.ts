import { Router } from "express";
import bodyValidate from "../common/body-validate.middleware";
import authController from "./auth.controller";
import registerScheme from "./auth.model";

const router = Router()

router.post('/register', authController.register)

export default router