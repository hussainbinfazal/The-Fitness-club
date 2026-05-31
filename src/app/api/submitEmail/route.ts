import { NextRequest, NextResponse } from "next/server";
import Message from "@/model/messageModel";
import { connect } from "mongoose";
import { connectDB } from "@/config/db";
import { logger } from "@/utils/logger";
import { ratelimit } from "@/lib/rate-limit";
export async function POST(req:NextRequest) {
   try {
        // Rate limit by IP (uses Upstash)
        const ipHeader = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "anonymous";
        const ip = ipHeader.split(",")[0].trim() || "anonymous";

        const { success, limit, remaining, reset } = await ratelimit.limit(`submitEmail:${ip}`);
        if (!success) {
            logger.warn("Rate limit exceeded for submitEmail", { ip });
            return NextResponse.json(
                { message: "Too many requests" },
                {
                    status: 429,
                    headers: {
                        "X-RateLimit-Limit": String(limit),
                        "X-RateLimit-Remaining": String(remaining),
                        "X-RateLimit-Reset": String(reset),
                    },
                }
            );
        }

    await connectDB();
     const data = await req.json();
    console.log(data);
    const { name, email, message, interest, phone } = data;

    if (!name || !email || !message || !interest || !phone) {
        logger.error("All fields are required");
        return NextResponse.json({ message: "All fields are required", status: 400 });
    }
    await Message.create({
        name,
        email,
        message,
        interest,
        phone,
    });
    logger.error("Email Accepted successfully");
    return NextResponse.json({ message: "Email Accepted successfully", status: 200 });
   } catch (error) {
    logger.error("Database connection failed",{error});
    return NextResponse.json({ message: "Something went wrong", status: 500 });
   }
}