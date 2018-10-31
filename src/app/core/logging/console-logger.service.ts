import { ILogger } from "./logger.interface";
import { Injectable } from "@angular/core";
import { LogLevel } from "./log-level.enum";

declare var console: any;

@Injectable({
    providedIn: 'root'
})
export class ConsoleLogService implements ILogger {

    log(msg: string, level: LogLevel, ...args: any[]) {
        if (level === LogLevel.Info) {
            (console && console.info) && console.info(msg, ...args);
        } else if (level === LogLevel.Warn) {
            (console && console.warn) && console.warn(msg, ...args);
        } else {
            (console && console.error) && console.error(msg, ...args);
        }
    }

    group(...args: any[]): void {
        (console && console.group) && console.group(...args);
    }

    groupEnd(...args: any[]): void {
        (console && console.groupEnd) && console.groupEnd(...args);
    }

}