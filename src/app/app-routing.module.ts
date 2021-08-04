import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { UsersSearchComponent } from './users-search/users-search.component';

const routes: Routes = [

  {
    component: PageAboutComponent,
    path: 'about'
  },
  {
    component: PageHomeComponent,
    path: ''
  },
  {
    component: UsersSearchComponent,
    path: 'user-search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
