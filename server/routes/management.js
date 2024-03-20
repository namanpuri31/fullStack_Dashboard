import express from "express"
import { getAdmins, getUserPerformance } from "../controllers/management.js";


const route = express.Router();

route.get("/admins", getAdmins);
route.get("/performance/:id", getUserPerformance);

export default route