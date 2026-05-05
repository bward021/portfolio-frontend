import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Reply {
  id: number;
  username: string;
  content: string;
  createdAt: string;
  postId: number;
}

export interface Post {
  id: number;
  username: string;
  content: string;
  createdAt: string;
  replies: Reply[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  createPost(username: string, content: string): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/posts`, { username, content });
  }

  createReply(postId: number, username: string, content: string): Observable<Reply> {
    return this.http.post<Reply>(`${this.baseUrl}/posts/${postId}/replies`, { username, content });
  }

  sendContactEmail(name: string, email: string, message: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact`, { name, email, message });
  }
}