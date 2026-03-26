import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../data/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}v1/posts`).pipe(
      catchError((error) => {
        console.error('Error fetching posts:', error);
        return of([]);
      })
    );
  }
}
