import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SignupComponent } from './Components/Authentication/signup/signup.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MoviecardComponent } from './Components/moviecard/moviecard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FilterComponent } from './Components/filter/filter.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MoviesComponent } from './Components/movies/movies.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { TheatreComponent } from './Components/theatre/theatre.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './Components/booking/booking.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NotFoumdComponent } from './Components/not-foumd/not-foumd.component';
import { SpinnerComponent } from './Components/spinner-component/spinner-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    MoviecardComponent,
    NavbarComponent,
    FilterComponent,
    MoviesComponent,
    MovieListComponent,
    TheatreComponent,
    BookingComponent,
    NotFoumdComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    NgbModule,
    MatTooltipModule,
    FormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    MatChipsModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
