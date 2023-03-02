import express from "express";
import { procurarMusica } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/api/:id", procurarMusica);

export default router;
