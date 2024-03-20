import express from "express"
import { getProduct, getCustomers, getTransactions, getGeography } from "../controllers/client.js";
const route = express.Router();

route.get('/product', getProduct)
route.get('/customers', getCustomers)
route.get('/transactions', getTransactions)
route.get('/geography', getGeography)

export default route