import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/Services/Movies/movies.service';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {

  selectedMovie: any = {};

  constructor(private movieApiService: MovieApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movieApiService.getMovie(movieId).subscribe({
        next: (movie) => this.selectedMovie = movie.selectedMovie,
        error: (error) => console.error('Error fetching movie:', error),
        complete: () => console.log('Movie fetch complete')
        
      });
    }
  }
  
}
