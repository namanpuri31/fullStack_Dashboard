import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import cors from "cors"
import bodyParser from "body-parser"
import morgan from "morgan"
import mongoose from "mongoose"
// importing routes files here below
import salesRoutes from "./routes/sales.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import clientRoutes from "./routes/client.js"
import User from "./models/User.js"
import Product from "./models/Product.js"
import ProductStat from "./models/ProductStat.js"
import Transaction from "./models/Transactions.js"
import OverallStat from "./models/OverallStat.js"
import AffiliateStat from "./models/AffiliateStat.js"

import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat, } from "./data/index.js"
// importing of routes ends here

const app = express();

// need to configure here
dotenv.config()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("common"))
app.use(cors())
// ended here


// api call starts here
app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)
// api call ends here

// connecting to mongoose mongoDB and listening port after that
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => console.log(`Listening at port ${PORT}`))

    // we are adding all users here from our datafile to the mongoose database this avoids duplicate data in db
    // User.insertMany(dataUser)
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)
    // OverallStat.insertMany(dataOverallStat)
    // AffiliateStat.insertMany(dataAffiliateStat);
}).catch((error) => console.log(`${error} did not connect :(`))
// connecting and listening to port ends here


