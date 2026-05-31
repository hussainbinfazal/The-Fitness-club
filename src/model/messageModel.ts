import mongoose from "mongoose";
export interface IMessage  {
    name: string,
    email: string,
    message: string,
    interest: string,
    phone: string
}
const messageSchema = new mongoose.Schema<IMessage>({
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

const Message: mongoose.Model<IMessage> = mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message