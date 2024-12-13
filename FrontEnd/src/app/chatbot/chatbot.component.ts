import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  isOpen = false;
  messages: { user: string; text: string }[] = [];
  userInput = '';

  constructor(private http: HttpClient) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ user: 'You', text: this.userInput });
      this.callGroqAPI(this.userInput);
      this.userInput = '';
    }
  }

  callGroqAPI(message: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`, 
    });

    const body = {
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
      model: 'llama3-8b-8192',
    };

    this.http
      .post<any>('https://api.groq-sdk-endpoint/chat/completions', body, { headers })
      .subscribe(
        (response) => {
          const botReply = response.choices[0].message.content;
          this.messages.push({ user: 'Bot', text: botReply });
        },
        (error) => {
          this.messages.push({ user: 'Bot', text: 'Sorry, there was an error processing your request.' });
          console.error('Error:', error);
        }
      );
  }
}




