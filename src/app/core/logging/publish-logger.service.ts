import { ILogger } from "./logger.interface";
import { Injectable } from "@angular/core";
import { LogLevel } from "./log-level.enum";
import { BaseService } from "../services/base.service";
import { LogEntry } from "./log-entry";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PublishLogger extends BaseService<LogEntry, string> implements ILogger {

    constructor(http: HttpClient) {
        super("/api/log-entry", http);
    }

    group(...args: any[]) {
        //
    }

    groupEnd(...args: any[]) {
        //
    }

    log(msg: string, level: LogLevel, ...param: any[]) {
        let entry = this.criaLog(msg, level, param);
        this.post(entry).subscribe();
    }

    private criaLog(msg: string, level: LogLevel, params: any[]) {
        let entry: LogEntry = new LogEntry();
        entry.message = msg;
        entry.level = level;
        entry.extraInfo = params;
        entry.entryDate = new Date();
        return entry;
    }
}