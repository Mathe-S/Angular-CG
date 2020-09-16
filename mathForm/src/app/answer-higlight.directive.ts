import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHiglight]',
})
export class AnswerHiglightDirective {
  constructor(private el: ElementRef, private controlName: NgControl) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.controlName.control.parent.valueChanges
      .pipe(map(({ a, b, answer }) => Math.abs((a + b - answer) / (a + b))))
      .subscribe((value) => {
        if (value < 0.2) {
          this.el.nativeElement.classList.add('close');
        } else {
          console.log(value);
          this.el.nativeElement.classList.remove('close');
        }
      });
  }
}
