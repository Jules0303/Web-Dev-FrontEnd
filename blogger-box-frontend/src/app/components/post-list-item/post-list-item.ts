import { Component, Input } from '@angular/core';
import { Post } from '../../data/post';

@Component({
  selector: 'app-post-list-item',
  standalone: false,
  template: `
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">{{ post.name }}</h5>
        <div class="mb-2">
          <span class="badge rounded-pill text-bg-light me-2">{{ post.category.name }}</span>
          <small class="text-muted">{{ post.date | date: "medium" }}</small>
        </div>
        <p class="card-text">{{ post.description }}</p>
      </div>
    </div>
  `
})
export class PostListItemComponent {
  @Input() post!: Post;
}
