import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length: number;
  includeNumbers = false;
  includeLetters = false;
  inlcudeSymbols = false;
  title = 'pw';

  useNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  useLetters(): void {
    this.includeLetters = !this.includeLetters;
  }

  useSymbols(): void {
    this.inlcudeSymbols = !this.inlcudeSymbols;
  }

  onChangeLength(value: string): void {
    this.length = parseInt(value, 10);
  }

  generate(): void {
    this.password = '';
    const numbers = '0987654321';
    const letters = 'qazwsxedcrfvtgbyhnujmikolp';
    const symbols = '!@#$%^&*()+_|":}{?><./,';
    let validChars = '';
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.inlcudeSymbols) {
      validChars += symbols;
    }

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      this.password += validChars[index];
    }
  }
}
