import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post, PostCreateInput } from '../data/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}v1/posts`).pipe(
      map(posts => posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())),
      catchError((error) => {
        console.error('Error fetching posts:', error);
        return of([]);
      })
    );
  }

  createPost(postData: PostCreateInput): Observable<Post> {
    return this.http.post<Post>(`${environment.apiUrl}v1/posts`, postData).pipe(
      catchError((error) => {
        console.error('Error creating post:', error);
        return throwError(() => error);
      })
    );
  }
}

