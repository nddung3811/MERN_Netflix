import express from "express";
import { getMovieFromOPhim } from "../controllers/ophim.controller.js";

const router = express.Router();

// API: GET /api/ophim/:slug
router.get("/:slug", getMovieFromOPhim);

export default router;
