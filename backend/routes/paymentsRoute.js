import express from 'express'
import { Payment } from '../models/paymentModel.js'
import makePayment from '../functions/makePayment.js'

const router = express.Router()

router.get("/transfer/:id",(req,res) => {
    let result = makePayment
})
