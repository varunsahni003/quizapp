import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-questions',
  templateUrl: './card-questions.component.html',
  styleUrls: ['./card-questions.component.css']
})
export class CardQuestionsComponent implements OnInit {

  favoriteSeason: string;

  seasons = [
    'yes',
    'no',
    'somewhat',
    'no doubt',
  ];

  constructor() { }

  ngOnInit() {
  }

}
