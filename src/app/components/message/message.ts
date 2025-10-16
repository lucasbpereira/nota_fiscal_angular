import { Component } from '@angular/core';
import { Messages, MessageType } from '../../interfaces/messages';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.scss'
})
export class Message {
  message: Messages | null = null;
  visible = false;

  getMessageClass(): string {
    if (!this.message) return '';

    const baseClass = 'message-container';
    const typeClass = `message-${this.message.type}`;
    const visibilityClass = this.visible ? 'message-visible' : 'message-hidden';

    return `${baseClass} ${typeClass} ${visibilityClass}`;
  }

  getIconClass(): string {
    if (!this.message) return '';

    switch (this.message.type) {
      case MessageType.SUCCESS:
        return 'icon-success';
      case MessageType.WARNING:
        return 'icon-warning';
      case MessageType.ERROR:
        return 'icon-error';
      case MessageType.INFO:
        return 'icon-info';
      default:
        return '';
    }
  }

  hideMessage() {
    this.visible = false;
    // Wait for animation to complete before removing message
    setTimeout(() => {
      this.message = null;
    }, 300);
  }
}
