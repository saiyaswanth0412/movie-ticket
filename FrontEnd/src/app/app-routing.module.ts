import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { EnsureAuthentication } from './Common/EnsureAuthentication';
import { MoviecardComponent } from './Components/moviecard/moviecard.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { TheatreComponent } from './Components/theatre/theatre.component';
import { BookingComponent } from './Components/booking/booking.component';
import { NotFoumdComponent } from './Components/not-foumd/not-foumd.component';

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
    path: 'movies',
    component: MoviesComponent,
    canActivate: [EnsureAuthentication]
  },
  {
    path:'movie/:id',
    component:TheatreComponent,
    canActivate:[EnsureAuthentication]
  },
  {
    path:'booking/:screenId',
    component:BookingComponent,
    canActivate:[EnsureAuthentication]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [EnsureAuthentication]
  },
  {
    path: '**',
    component: NotFoumdComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
