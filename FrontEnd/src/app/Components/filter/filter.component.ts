import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  genres: string[] = ['All', 'Action', 'Adventure', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Fantasy'];
  selectedGenre: string = 'All';
  
  sortOptions: string[] = ['Title', 'Rating'];
  selectedSort: string = ''

  selectGenre(genre: string) {
    this.selectedGenre = genre;
    // Handle genre selection logic
  }
}
