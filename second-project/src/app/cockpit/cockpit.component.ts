import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent', { static: true }) serverContent: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverName: HTMLInputElement): void {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value,
    });
  }

  onAddBlueprint(serverName: HTMLInputElement): void {
    this.bluePrintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value,
    });
  }
}
