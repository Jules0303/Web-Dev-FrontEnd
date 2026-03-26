import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar';
import { PostListComponent } from './components/post-list/post-list';
import { PostListItemComponent } from './components/post-list-item/post-list-item';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
