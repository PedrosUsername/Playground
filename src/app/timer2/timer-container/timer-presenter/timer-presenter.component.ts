import { EventEmitter, ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timer-presenter',
  templateUrl: './timer-presenter.component.html',
  styleUrls: ['./timer-presenter.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerPresenterComponent {
  @Input() h!: number;
  @Input() m!: number;
  @Input() s!: number;

  @Output() start = new EventEmitter;

  @Output() houUp = new EventEmitter;
  @Output() minUp = new EventEmitter;
  @Output() secUp = new EventEmitter;

  @Output() houDown = new EventEmitter;
  @Output() minDown = new EventEmitter;
  @Output() secDown = new EventEmitter;  

  @Input() disable!: boolean;

  constructor() { }

  run(): void { this.start.emit(); }

  hUp(): void { this.houUp.emit(); }
  mUp(): void { this.minUp.emit(); }
  sUp(): void { this.secUp.emit(); }

  hDown(): void { this.houDown.emit(); }
  mDown(): void { this.minDown.emit(); }    
  sDown(): void { this.secDown.emit(); }  

}
