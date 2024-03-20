import express from "express"
import { getDashboardStats, getUser } from "../controllers/general.js"
const route = express.Router();

route.get("/user/:id", getUser)
route.get("/dashboard",getDashboardStats);

export default route