import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: false,
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container">
        <a class="navbar-brand" [routerLink]="['/']">
          <i class="bi bi-postcard"></i> Blogger-Box
        </a>
        <a class="btn btn-outline-primary ms-auto" [routerLink]="['/add-post']">
          <i class="bi bi-pencil-square"></i> Post
        </a>
      </div>
    </nav>
  `
})
export class TopBarComponent { }
