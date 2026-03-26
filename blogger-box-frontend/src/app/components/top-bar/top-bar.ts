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
        <button class="btn btn-outline-primary ms-auto">
          <i class="bi bi-pencil-square"></i> Write
        </button>
      </div>
    </nav>
  `
})
export class TopBarComponent {}
