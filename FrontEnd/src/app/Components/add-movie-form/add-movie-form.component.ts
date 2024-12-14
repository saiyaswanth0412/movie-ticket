import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css'],
})
export class AddMovieFormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddMovieFormComponent>,
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
      .post(`http://localhost:3000/api/admin/addMovie`, this.data, { headers })
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
}
