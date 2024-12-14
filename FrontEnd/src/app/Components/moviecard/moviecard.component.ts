import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalsService } from 'src/app/Services/Globals/globals.service';
import { EditMovieFormComponent } from '../edit-movie-form/edit-movie-form.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css'],
})
export class MoviecardComponent implements OnInit {
  constructor(
    private router: Router,
    private globalService: GlobalsService,
    public dialog: MatDialog,
    private http: HttpClient
  ) {}

  @Input() movieId!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() image!: string;
  @Input() details!: string;

  ngOnInit(): void {}

  bookNow() {
    if (this.movieId) {
      this.globalService.selectedMovieID = this.movieId;
      this.router.navigate(['/movie', this.movieId]);
    } else {
      console.error('Movie ID is undefined');
    }
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditMovieFormComponent, {
      width: '400px',
      data: {
        title: this.title,
        details: this.details,
        image: this.image,
        subtitle: this.subtitle,
        movieId: this.movieId,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dialog result:', result);
        this.title = result.title;
        this.details = result.details;
        this.image = result.image;
        this.subtitle = result.subtitle;
      }
    });
  }

  deleteMovie() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    this.http
      .delete(
        `http://localhost:3000/api/admin/deleteMovie?movieId=${this.movieId}`,
        { headers }
      )
      .subscribe({
        next: () => {
          console.log('Data deleted successfully');
          this.router.navigate(['/movies']);
        },
        error: (error) => {
          console.error('Error occurred while deleting data:', error);
        },
      });
  }
}
