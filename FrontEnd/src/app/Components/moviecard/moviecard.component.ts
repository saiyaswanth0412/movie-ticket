import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() movieId!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() image!: string;
  @Input() details!: string;


  ngOnInit(): void {
  }

  bookNow() {
    console.log('the movie id',this.movieId)
    this.router.navigate(['/movie', this.movieId]);
  }

}
