import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JeopardyDataService } from './jeopardy-data/jeopardy-data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    JeopardyDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
