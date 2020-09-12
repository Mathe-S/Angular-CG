import { Component } from '@angular/core';
import { features } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature = 'recipe';
  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
