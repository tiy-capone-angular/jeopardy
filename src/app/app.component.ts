import { Component } from '@angular/core';
import { JeopardyDataService } from './jeopardy-data/jeopardy-data.service';
import { IAnswer } from './models/answer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  score: number;
  answer: IAnswer;
  error;
  message: string;
  userReply: string;
  hint: string;

  constructor(
    private dataService: JeopardyDataService
  ) {
    this.score = 0;
  }

  checkReply() {
    // check if answer is good
    // if so,
      // add value to score
      // get a new answer
    // otherwise
      // just insult them
    let good = this.answer.answer.toLowerCase() === this.userReply.toLowerCase();
    if (good) {
      this.score += this.answer.value;
      this.answer = null;
      this.userReply = '';
      this.hint = '';
      this.getAnswer();
    } else {
      this.message = 'You are as dumb as you are pretty.';
    }
  }

  getAnswer(): void {
    let observable = this.dataService
      .getNextAnswer();
    this.hint = '';

    setTimeout(() => {
      observable
        .subscribe(
          o => {
            this.answer = o;
            setTimeout(() => this.hint = this.answer.answer, 5000);
          },
          e => this.error = e,
          () => this.message = 'Done'
        );
    }, 0);

    // let promise = observable.toPromise();

    // setTimeout(() => {
    //   promise
    //     .then(o => this.answer = o)
    //     .then(() => console.log('hi!'))
    //     .then(() => { throw new Error(); })
    //     .then(() => console.log('never run'))
    //     .catch(e => this.error = e);
    // }, 3000);
  }

}
