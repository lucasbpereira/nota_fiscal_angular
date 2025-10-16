import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   private messageSubject = new Subject<Message>();
  private clearSubject = new Subject<void>();

  getMessage(): Observable<Message> {
    return this.messageSubject.asObservable();
  }

  getClear(): Observable<void> {
    return this.clearSubject.asObservable();
  }

  showSuccess(title: string, content: string, duration: number = 5000) {
    this.showMessage('success', title, content, duration);
  }

  showWarning(title: string, content: string, duration: number = 5000) {
    this.showMessage('warning', title, content, duration);
  }

  showError(title: string, content: string, duration: number = 5000) {
    this.showMessage('error', title, content, duration);
  }

  showInfo(title: string, content: string, duration: number = 5000) {
    this.showMessage('info', title, content, duration);
  }

  private showMessage(type: 'success' | 'warning' | 'error' | 'info',
                     title: string, content: string, duration: number) {
    this.messageSubject.next({ type, title, content, duration });
  }

  clear() {
    this.clearSubject.next();
  }
}
