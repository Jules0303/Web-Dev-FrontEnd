import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <app-top-bar></app-top-bar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'blogger-box-frontend';
}
