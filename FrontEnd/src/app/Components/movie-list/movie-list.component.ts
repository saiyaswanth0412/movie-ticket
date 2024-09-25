import { Component, OnInit } from '@angular/core';
import {moviesList} from '../../Common/Movies'
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  movies = moviesList
}
