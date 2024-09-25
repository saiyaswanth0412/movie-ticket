import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {

  constructor() { }
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() image!: string;
  @Input() details!: string;


  ngOnInit(): void {
  }
  

}
