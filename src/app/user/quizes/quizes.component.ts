import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {

  quizes = [
    'quiz1',
    'quiz2',
    'quiz3',
    'quiz4',
    'quiz5',
    'quiz6',
    'quiz7',    
  ];

  constructor() { }

  ngOnInit() {
  }

}
