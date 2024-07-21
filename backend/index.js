import express from "express";
import { PORT, mongoDBURL } from './config.js'
import paymentsRoute from "./routes/paymentsRoute.js";
import mongoose from "mongoose";
import cors from 'cors'

const app = express();

app.use(express.json())

// Allow users of all configurations
app.use(cors())

app.get("/", (req, res) => {
    return res.status(200).send("Welcome to Catsino")
})

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Database connected !');
        app.listen(PORT, () => {
            console.log(`http://127.0.0.1:${PORT}`);
        })
    })
    .catch(error => {
        console.log(error)
    })