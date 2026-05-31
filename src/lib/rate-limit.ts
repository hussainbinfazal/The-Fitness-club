import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@/config/upstashRedis";

export const ratelimit : Ratelimit = new Ratelimit({
  redis,

  limiter: Ratelimit.slidingWindow(
    10,    // requests
    "1 m", // per minute
  ),

  analytics: true,
  prefix: "ratelimit",
});

