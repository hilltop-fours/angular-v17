import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit, input } from '@angular/core';
import { DateTime } from 'luxon';
import { Observable, Subscription, timer } from 'rxjs';
import { Luxon } from '../../util/luxon';

const POLLING = 1000;
const MINUTES = 3; // This value should remain 3 for developmental purposes.
const MILLISECONDS_IN_MINUTES = 60000;

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit, OnDestroy {

  readonly isNew = input.required<boolean>()
  readonly lastUpdatedDateTime = input.required<string>()

  elapsedMinutes!: number;
  elapsedSeconds!: number;
  isOnTime!: boolean;
  isTooLate!: boolean;

  private elapsedMilliseconds!: number;
  private sla: number = MINUTES * MILLISECONDS_IN_MINUTES; // Mocked value. minutes * unit, converted to milliseconds

  private everySecond: Observable<number> = timer(0, POLLING);
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.everySecond.subscribe(() => {
      const elapsedDateTime = this.getElapsedTime();
      this.elapsedMinutes = Luxon.formatTime(elapsedDateTime.minutes);
      this.elapsedSeconds = Luxon.formatTime(elapsedDateTime.seconds);
      this.elapsedMilliseconds = Luxon.getElapsedMilliseconds(this.lastUpdatedDateTime());
      this.isOnTime = this.updateIsOnTime();
      this.isTooLate = this.updateIsToolate();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getElapsedTime() {
    // Date.fromISO().diffNow() is also a possibility. However, this results in a negative time as the date has already passed.
    // As such the process is reserved, comparing now with the passed date, resulting in positive numbers.
    return DateTime.utc()
      // Milliseconds is added as a unit so the seconds will always be a rounded digit.
      .diff(DateTime.fromISO(this.lastUpdatedDateTime()), ['hours', 'minutes', 'seconds', 'milliseconds'])
      .toObject();
  }

  private updateIsOnTime(): boolean {
    return this.elapsedMilliseconds < this.sla;
  }

  private updateIsToolate(): boolean {
    return !this.isOnTime;
  }
}