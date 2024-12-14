import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    if (!this.userInput.trim()) {
      this.messages.push({ user: 'Bot', text: 'Please enter a valid message.' });
      return;
    }

    this.messages.push({ user: 'You', text: this.userInput });
    this.callGroqAPI(this.userInput);
    this.userInput = '';
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

    this.messages.push({ user: 'Bot', text: 'Typing...' }); // Placeholder

    this.http
      .post<any>('https://api.groq-sdk-endpoint/chat/completions', body, { headers })
      .subscribe(
        (response) => {
          this.messages.pop(); // Remove placeholder
          const botReply = response.choices[0].message.content;
          this.messages.push({ user: 'Bot', text: botReply });
        },
        (error) => {
          this.messages.pop(); // Remove placeholder
          let errorMessage = 'Sorry, there was an error processing your request.';
          if (error.status === 401) {
            errorMessage = 'Authorization failed. Please check your API key.';
          } else if (error.status === 500) {
            errorMessage = 'Server error. Please try again later.';
          }
          this.messages.push({ user: 'Bot', text: errorMessage });
          console.error('Error:', error);
        }
      );
  }
}



