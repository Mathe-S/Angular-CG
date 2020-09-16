import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from 'rxjs/operators';
import { access } from 'fs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;

  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl(''),
    },
    [MathValidators.addition('answer', 'a', 'b')]
  );

  constructor() {}

  ngOnInit(): void {
    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(100),
        scan(
          (acc) => {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime,
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        numberSolved++;
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: '',
        });
      });
  }

  get a(): number {
    return this.mathForm.value.a;
  }
  get b(): number {
    return this.mathForm.value.b;
  }

  randomNumber(): number {
    return Math.floor(Math.random() * 10);
  }
}
