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

  constructor(
    private dataService: JeopardyDataService
  ) {
    this.score = 0;
  }

  getAnswer(): void {
    let observable = this.dataService
      .getNextAnswer();

    setTimeout(() => {
      observable
        .subscribe(
          o => this.answer = o,
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
