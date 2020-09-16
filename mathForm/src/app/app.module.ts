import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';
import { AnswerHiglightDirective } from './answer-higlight.directive';

@NgModule({
  declarations: [AppComponent, EquationComponent, AnswerHiglightDirective],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
