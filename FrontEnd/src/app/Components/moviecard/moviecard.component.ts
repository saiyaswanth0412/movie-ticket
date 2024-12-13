import { Component, Input, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/Services/Movies/movies.service';
import { Router } from '@angular/router';
import { GlobalsService } from 'src/app/Services/Globals/globals.service';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {

  constructor(private router: Router, private globalService:GlobalsService) { }
  @Input() movieId!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() image!: string;
  @Input() details!: string;


  ngOnInit(): void {
  }

  bookNow() {
    if (this.movieId) {
      this.globalService.selectedMovieID = this.movieId;
      this.router.navigate(['/movie', this.movieId]);
    } else {
      console.error('Movie ID is undefined');
    }
  }  
}
