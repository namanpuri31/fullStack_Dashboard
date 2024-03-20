import express from "express"
import { getSales } from "../controllers/sales.js";

const route=express.Router();

route.get("/sales",getSales);

export default route