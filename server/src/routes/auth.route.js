import { Router } from "express";
import { login, logout, refreshToken, registerUser } from "../controllers/auth.controller.js";

const router = Router();

router.post('/register', registerUser)
router.post('/login', login)
router.post('/refresh-token', refreshToken )
router.delete('/logout', logout )

export default router;