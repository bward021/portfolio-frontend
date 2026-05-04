import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, Post } from '../../services/api';

@Component({
  selector: 'app-forum',
  imports: [NgFor, NgIf, FormsModule, DatePipe],
  templateUrl: './forum.html',
  styleUrl: './forum.scss'
})
export class Forum implements OnInit {
  posts: Post[] = [];
  isLoading = true;
  error = '';

  newPost = { username: '', content: '' };
  replyInputs: { [postId: number]: { username: string; content: string; show: boolean } } = {};

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.isLoading = true;
    this.apiService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Could not load posts. Please try again later.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  submitPost() {
    if (!this.newPost.username.trim() || !this.newPost.content.trim()) return;

    this.apiService.createPost(this.newPost.username, this.newPost.content).subscribe({
      next: (post) => {
        this.posts.unshift(post);
        this.newPost = { username: '', content: '' };
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Could not create post. Please try again.';
        this.cdr.detectChanges();
      }
    });
  }

  toggleReply(postId: number) {
    if (!this.replyInputs[postId]) {
      this.replyInputs[postId] = { username: '', content: '', show: true };
    } else {
      this.replyInputs[postId].show = !this.replyInputs[postId].show;
    }
    this.cdr.detectChanges();
  }

  submitReply(postId: number) {
    const reply = this.replyInputs[postId];
    if (!reply?.username.trim() || !reply?.content.trim()) return;

    this.apiService.createReply(postId, reply.username, reply.content).subscribe({
      next: () => {
        this.replyInputs[postId] = { username: '', content: '', show: false };
        this.loadPosts();
      },
      error: () => {
        this.error = 'Could not submit reply. Please try again.';
        this.cdr.detectChanges();
      }
    });
  }
}