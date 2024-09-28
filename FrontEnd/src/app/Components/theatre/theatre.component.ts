import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedMovie = {
    title: 'Devara Part 1',
    rating: 9.0,
    status: 'Ongoing',
    year: 2024,
    genre: 'Action, Adventure, Drama',
    description: 'NTR Jr returns in the epic action-adventure set in the coastal regions.',
    backgroundImage: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-1214428,resizemode-75,msid-113144887/magazines/panache/ntr-jr-s-devara-part-1-trailer-date-revealed-as-movie-makes-pre-release-box-office-history-in-usa.jpg',
    theaters: [
      {
        name: 'PVR Cinemas',
        description: 'One of the most popular multiplexes offering luxury seating.',
        address: 'Mumbai, Maharashtra, India',
        rating: 8.7,
        image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-1214428,resizemode-75,msid-113144887/magazines/panache/ntr-jr-s-devara-part-1-trailer-date-revealed-as-movie-makes-pre-release-box-office-history-in-usa.jpg'
      },
      {
        name: 'INOX',
        description: 'A leading chain known for high-quality screens and sound systems.',
        address: 'Bangalore, Karnataka, India',
        rating: 8.9,
        image: 'https://example.com/inox_cinemas.jpg'
      },
      {
        name: 'AMC Theaters',
        description: 'Experience the latest movies with top-class comfort and service.',
        address: 'Los Angeles, California, USA',
        rating: 9.2,
        image: 'https://example.com/amc_theaters.jpg'
      }
    ]
  };
}
