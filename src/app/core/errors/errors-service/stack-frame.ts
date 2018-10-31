export class StackFrame {

    private columnNumber: number;
    private lineNumber: number;
    private fileName: string;
    private functionName: string;
    private source: string;
  
    constructor( columnNumber: number, lineNumber: number, fileName: string, functionName: string, source: string) {
        this.columnNumber = columnNumber;
        this.lineNumber = lineNumber;
        this.fileName = fileName;
        this.functionName = functionName;
        this.source = source;
    }
  
  }