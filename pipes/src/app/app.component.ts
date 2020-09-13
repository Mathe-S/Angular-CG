import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent {
  name: string;
  date: Date;
  amount: number;
  height: number;
  kilometers: number;

  car = {
    make: "Toyota",
    model: "Camry",
    year: 2000,
  };

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: Date) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onMileChange(value: string) {
    this.kilometers = parseFloat(value);
  }
}
