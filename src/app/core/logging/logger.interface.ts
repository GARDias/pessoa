import { LogLevel } from "./log-level.enum";

export interface ILogger {
    group(...param: any[]): void;
    groupEnd(...param: any[]): void;
    log(msg: string, level: LogLevel, ...param: any[]);
}