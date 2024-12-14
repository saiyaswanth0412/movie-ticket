import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-movie-form',
  templateUrl: './edit-movie-form.component.html',
  styleUrls: ['./edit-movie-form.component.css'],
})
export class EditMovieFormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditMovieFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    const body = { data: this.data };
    this.http
      .put(
        `http://localhost:3000/api/admin/updateMovie?movieId=${this.data.movieId}`,
        this.data,
        { headers }
      )
      .subscribe({
        next: (response) => {
          this.dialogRef.close(this.data);
          location.reload();
        },
        error: (error) => {
          console.error('Error occurred while saving data:', error);
        },
      });
    this.dialogRef.close(this.data);
  }

  delete() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    this.http
      .delete(
        `http://localhost:3000/api/admin/deleteMovie?movieId=${this.data.movieId}`,
        { headers }
      )
      .subscribe({
        next: (response) => {
          this.dialogRef.close();
        },
        error: (error) => {
          console.error('Error occurred while deleting data:', error);
        },
      });
  }
}
