import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersSearchComponent } from './users-search/users-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    PageAboutComponent,
    PageHomeComponent,
    NavigationComponent,
    UsersSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
