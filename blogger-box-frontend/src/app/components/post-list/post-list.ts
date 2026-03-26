import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../data/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  standalone: false,
  template: `
    @if (posts$ | async; as posts) {
      @if (posts.length > 0) {
        @for (post of posts; track $index) {
          <app-post-list-item [post]="post"></app-post-list-item>
        }
      } @else {
        <div class="alert alert-info">No posts available.</div>
      }
    } @else {
      <div class="alert alert-info">No posts available.</div>
    }
  `
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
