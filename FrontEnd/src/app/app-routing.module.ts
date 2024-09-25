import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { EnsureAuthentication } from './Common/EnsureAuthentication';

const routes: Routes = [
  {
    path: 'login',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [EnsureAuthentication]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
