import { number } from "framer-motion";
import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,

    },
    message: {
        type: String,
        trim: true,
    },
    interest: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
});

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message