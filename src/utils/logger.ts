import pino from "pino";

export interface ILogger {
    info(message: string,meta?:Record<string,unknown>): void
    debug(message: string,meta?:Record<string,unknown>): void
    error(message: string,meta?:Record<string,unknown>): void
    warn(message: string,meta?:Record<string,unknown>): void
}
export const isProduction = process.env.NODE_ENV === "production";
export const logger:ILogger = pino({
    level:process.env.LOG_LEVEL || (isProduction ? 'info' : 'debug'),
    base: {
       
        hostname: process.env.NODE_ENV === "development" ? "localhost" : "production",
    },
    },
    isProduction ? undefined : pino.transport({
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: "HH:MM;ss",
            ignore: 'pid,hostname'
        }
    })
)