import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalsService } from 'src/app/Services/Globals/globals.service';
import { Subscription } from 'rxjs';
import { MovieApiService } from '../../Services/Movies/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: any[] = [];
  selectedMovies: any[] = [];
  private subscription!: Subscription; 

  constructor(private globalsService: GlobalsService, private movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.movieApiService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.selectedMovies = movies; 
    });
    
    this.subscription = this.globalsService.selectedGenere$.subscribe((genere: string) => {
      this.updateMovies(genere);
    });
  }
  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateMovies(genere: string): void {
    console.log('calling....');
    
    if (genere === 'All') {
      this.selectedMovies = this.movies;
    } else {
      this.selectedMovies = this.movies.filter((movie) => {
        return movie?.Genre.indexOf(genere) !== -1; 
      });
    }
  }
}
