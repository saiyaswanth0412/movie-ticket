import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/Services/Globals/globals.service';
import { EditMovieFormComponent } from '../edit-movie-form/edit-movie-form.component';
import { MatDialog } from '@angular/material/dialog';
import { AddMovieFormComponent } from '../add-movie-form/add-movie-form.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  genres: string[] = [
    'All',
    'Action',
    'Adventure',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Fantasy',
  ];
  selectedGenre: string = 'All';
  role: string | null = null;
  constructor(
    private globalsService: GlobalsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('Admin');
  }

  selectGenre(genre: string) {
    this.selectedGenre = genre;
    this.globalsService.selectedGenere = genre;
  }
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddMovieFormComponent, {
      width: '400px',
      height: '600px',
      data: {
        title: '',
        details: '',
        image: '',
        subtitle: '',
        movieId: '',
        description:''
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dialog result:', result);
        console.log(result);
        
      }
    });
  }


}
