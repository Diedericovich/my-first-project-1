import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: string [] = [];

  addMessage(message: string): void {
    this.messages.push(message);
  }

  clearMessages(): void {
    this.messages = [];
  }

  constructor() { }
}
