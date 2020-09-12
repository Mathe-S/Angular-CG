import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  randomText = lorem.sentence();
  inputText = "";
  started: Date;
  time: number;

  onInput(value: string): void {
    this.inputText = value;
    if (this.inputText.split("").length === 1) {
      this.started = new Date();
    }
  }

  compare(letter: string, i: number): string {
    if (this.randomText === this.inputText) {
      this.time = new Date().getSeconds() - this.started.getSeconds();
    }
    if (!this.inputText[i]) {
      return "pending";
    }
    if (this.inputText[i] === letter) {
      return "correct";
    } else {
      return "incorrect";
    }
  }
}
