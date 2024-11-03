import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalsService } from 'src/app/Services/Globals/globals.service';
import { Subscription } from 'rxjs';
import { MovieApiService } from '../../Services/Movies/movies.service';
import { SpinnerService } from 'src/app/Services/spinner.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: any[] = [];
  selectedMovies: any[] = [];
   subscription!: Subscription; 

  constructor(
    private globalsService: GlobalsService, 
    private movieApiService: MovieApiService,
    public  spinnerService: SpinnerService 
  ) {}

  ngOnInit(): void {
    this.fetchMovies();

    this.subscription = this.globalsService.selectedGenere$.subscribe((genere: string) => {
      this.updateMovies(genere);
    });
  }
  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private fetchMovies(): void {
    this.spinnerService.show(); 
    this.movieApiService.getMovies().subscribe(
      movies => {
        this.movies = movies;
        this.selectedMovies = movies; 
        this.spinnerService.hide(); 
      },
      error => {
        console.error('Error fetching movies', error);
        this.spinnerService.hide();
      }
    );
  }

  private updateMovies(genere: string): void {
    console.log('calling....');
    
    if (genere === 'All') {
      this.selectedMovies = this.movies;
    } else {
      this.selectedMovies = this.movies.filter(movie => movie?.Genre.indexOf(genere) !== -1);
    }
  }
}
