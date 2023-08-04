import { Router } from "express";
import authController from "./auth.controller";
import { errorHandler } from "../common/error-handler";

const router = Router()

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/verify', authController.verify)
router.use(errorHandler)

export default router