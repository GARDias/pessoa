import { Injectable } from '@angular/core';
import { IMessage } from './message.interface';
 
@Injectable({ providedIn: 'root' })
export class MessageService {
    private erros: Array<IMessage> = [];
 
    sendMessage(message: string) {
        this.erros.push({ id: 1, text: message, type: 'info' });
    }
 
    sendMessageError(message: string) {
        this.erros.push({ id: 2,text: message, type: 'danger' });
    }

    sendMessageSuccess(message: string) {
        this.erros.push({ id: 3,text: message, type: 'success' });
    }

    sendMessageWarning(message: string) {
        this.erros.push({ id: 4, text: message, type: 'warning' });
    }

    clearMessage() {
        this.erros = [];
    }
 
    getMessage(): Array<IMessage> {
        return this.erros;
    }

    closeAlert(message: IMessage) {
        const index: number = this.erros.indexOf(message);
        this.erros.splice(index, 1);
    }
}