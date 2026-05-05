import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  showModal = false;
  name = '';
  email = '';
  message = '';
  sending = false;
  sent = false;
  error = '';

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  openModal() {
    this.showModal = true;
    this.sent = false;
    this.error = '';
  }

  closeModal() {
    this.showModal = false;
    this.name = '';
    this.email = '';
    this.message = '';
    this.sending = false;
    this.sent = false;
    this.error = '';
  }

  sendEmail() {
    if (!this.name || !this.email || !this.message) {
      this.error = 'All fields are required.';
      return;
    }

    this.sending = true;
    this.error = '';

    this.apiService.sendContactEmail(this.name, this.email, this.message).subscribe({
      next: () => {
        console.log('Email sent successfully!');
        this.sending = false;
        this.sent = true;
        this.cdr.detectChanges();
        console.log('sent:', this.sent);
      },
      error: () => {
        this.sending = false;
        this.error = 'Something went wrong. Please try again.';
        this.cdr.detectChanges();
      }
    });
  }
}