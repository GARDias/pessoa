import { LogLevel } from "./log-level.enum";

export class LogEntry {
    entryDate: Date = new Date();
    level: LogLevel = LogLevel.Info;
    message: string = "";
    extraInfo: any[] = [];
    logWithDate: boolean = true;

    toString(): string {
        let ret: string = "";

        if (this.logWithDate) {
            ret = new Date() + " - ";
        }
        ret += "Tipo: " + LogLevel[this.level];
        ret += " - Mensagem: " + this.message;
        if (this.extraInfo.length) {
            ret += " - Outras informações: " + this.formatParams(this.extraInfo);
        }
        return ret;
    }

    private formatParams(params: any[]): string {
        let ret: string = params.join(",");

        if (params.some(p => typeof p == "object")) {
            ret = "";
            for (let item of params) {
                ret += JSON.stringify(item) + ",";
            }
        }

        return ret;
    }
}