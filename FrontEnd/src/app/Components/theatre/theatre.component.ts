import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/Services/Movies/movies.service';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { SpinnerService } from 'src/app/Services/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { BookNowDialogComponent } from 'src/app/Common/book-now-dialog/book-now-dialog.component';
import { GlobalsService } from 'src/app/Services/Globals/globals.service';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css'],
})
export class TheatreComponent implements OnInit {
  selectedMovie: any = {};
  movieNames = [];
  constructor(
    private movieApiService: MovieApiService,
    private route: ActivatedRoute,
    public spinnerService: SpinnerService,
    public dialog: MatDialog,
    private globalService: GlobalsService
  ) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  private fetchMovies(): void {
    this.spinnerService.show();
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movieApiService.getMovie(movieId).subscribe({
        next: (movie) =>{
          this.selectedMovie = movie.selectedMovie,
          this.globalService.selectedMovie = movie.selectedMovie
        },
        error: (error) => console.error('Error fetching movie:', error),
        complete: () => {
          console.log('Movie fetch complete');
          this.spinnerService.hide();
        },
      });
    } else {
      this.spinnerService.hide();
    }
  }

  openDialog(theater: any): void {
    this.globalService.selectedTheatreID = theater.Theatre_ID;
    this.dialog.open(BookNowDialogComponent, {
      data: { names: this.movieNames }
    });
  }
}
