import {Router } from "express";
import { getDashboard } from "../controllers/dashboardController";
import { protect } from "../middleware/auth";

const dashboardRouter = Router()

dashboardRouter.get('/', protect,getDashboard)
export default dashboardRouter;