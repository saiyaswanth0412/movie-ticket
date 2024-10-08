import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/Services/Globals/globals.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  genres: string[] = ['All', 'Action', 'Adventure', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Fantasy'];
  selectedGenre: string = 'All';

  constructor(private globalsService: GlobalsService) { }

  ngOnInit(): void { }

  selectGenre(genre: string) {
    this.selectedGenre = genre;
    this.globalsService.selectedGenere = genre;
  }
}