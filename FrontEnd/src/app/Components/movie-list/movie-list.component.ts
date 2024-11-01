import { Component, OnInit, OnDestroy } from '@angular/core';
import { moviesList } from '../../Common/Movies';
import { GlobalsService } from 'src/app/Services/Globals/globals.service';
import { Subscription } from 'rxjs';
import { MovieApiService } from '../../Services/Movies/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies = moviesList;
  private subscription!: Subscription; 

  constructor(private globalsService: GlobalsService,private movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.movieApiService.getMovies().subscribe(movies => {
      this.movies = movies;
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

  private updateMovies(genere: string) {
    this.movies = moviesList.filter(movie=>movie.subtitle===genere);
  }
}
