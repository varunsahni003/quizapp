import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedAnswer: any;
  allAnswers=[];
  currentQuestion: any;
  count = 0;

  questionsLength: any;
  questionNumbers = [];

  hideNavigation = true;
  giveFeedback: string;

  submitFlag = false;


  allQuestions: any[] = [
    {
      question: "Who are you?",
      options: ["I am no one", "I am who believes", "I am unique", "I am mysterious"]
    },
    {
      question: "Where are you?",
      options: ["I am no where", "I am everywhere", "You tell", "I am in Canada"]
    },
    {
      question: "Where you want to go?",
      options: ["I want to go no where", "I will go everywhere", "You tell", "I want to go Canada"]
    }
  ];


  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentQuestion = this.allQuestions[this.count].question;
    this.questionsLength = this.allQuestions.length;
    for(let i=0; i<this.questionsLength; i++) {
      this.questionNumbers.push(i);
    }
  }


  radioClicked(selectedAnswer) {
    let newMap = new Map();
    newMap.set(this.currentQuestion, this.selectedAnswer);
    newMap.forEach(function(value, key) {
      console.log(key + ' = ' + value);
      console.log(newMap);
    });
    // let resultObj = {};
    // resultObj[this.currentQuestion]=this.selectedAnswer;
    // this.allAnswers[this.count]=resultObj;
    // console.log(this.allAnswers);
  }

  nextClicked() {
    console.log("next clicked");
    if (this.count < this.allQuestions.length-1) {
      this.currentQuestion = this.allQuestions[this.count + 1].question;
      this.count += 1;
    }
    if(this.count == this.allQuestions.length-1) {
      this.submitFlag = true;
    }
  }

  previousClicked() {
    console.log("previous clicked");
    if (this.count != 0) {
      this.currentQuestion = this.allQuestions[this.count - 1].question;
      this.count -= 1;
    }
  }

  submit() {
    console.log("submit clicked");
    this.router.navigate(['user/score']);
  }
                  // Navigation list
  questionsList() {
    console.log("Navigation list clicked");
    this.hideNavigation = false;
  }

  selectedQuestionNumber(questionNumber) {
    console.log(questionNumber);
    this.hideNavigation = true;
    this.currentQuestion = this.allQuestions[questionNumber].question;
  }
  
                  // Feedback
  feedbackDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: { giveFeedback: this.giveFeedback }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.giveFeedback = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <h1 mat-dialog-title>Provide your feedback here</h1>
<div mat-dialog-content>
  <p>If question/answer is wrong please tell us here</p>
  <mat-form-field>
    <textarea matInput [(ngModel)]="data.giveFeedback" placeholder="Feedback"></textarea>
  </mat-form-field>
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()">No Thanks</button>
  <button mat-button [mat-dialog-close]="data.giveFeedback" cdkFocusInitial>Ok</button>
</div>
  `,
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
