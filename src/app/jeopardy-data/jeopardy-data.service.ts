import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IAnswer } from '../models/answer';

import 'rxjs/add/operator/map';

@Injectable()
export class JeopardyDataService {

  constructor(
    private http: HttpClient
  ) { }

  getNextAnswer(): Observable<IAnswer> {
    return this.http
      .get('http://jservice.io/api/random')
      .map(value => value as IAnswer[])
      .map(value => value[0]);
  }

}
