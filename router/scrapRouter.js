import express from "express";
import { scrapNewsList } from "../controllers/scrapController.js";

const router = express.Router();

router.get("/getlatestNews", scrapNewsList);

export default router;
