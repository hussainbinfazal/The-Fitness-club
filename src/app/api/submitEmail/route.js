import { NextResponse } from "next/server";
import Message from "@/model/messageModel";
import { connect } from "mongoose";
import { connectDB } from "@/config/db";
export async function POST(req) {
   try {
    await connectDB();
     const data = await req.json();
    console.log(data);
    const { name, email, message, interest, phone } = data;

    if (!name || !email || !message || !interest || !phone) {
        return NextResponse.json({ message: "All fields are required", status: 400 });
    }
    await Message.create({
        name,
        email,
        message,
        interest,
        phone,
    });


    return NextResponse.json({ message: "Email sent successfully", status: 200 });
   } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong", status: 500 });
   }
}