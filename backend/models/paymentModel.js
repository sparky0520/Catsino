import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
    {
        accountId: {
            type: String,
            required: true
        },
        paging_token: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Payment = mongoose.model("Catsino",paymentSchema)