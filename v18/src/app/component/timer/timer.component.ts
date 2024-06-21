import { NgClass } from '@angular/common';
import { Component, Injector, OnDestroy, OnInit, effect, inject, input, signal } from '@angular/core';
import { DateTime } from 'luxon';
import { Observable, Subject, takeUntil, timer } from 'rxjs';

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

  injector = inject(Injector)

  readonly isNew = input.required<boolean>()
  readonly lastUpdatedDateTime = input.required<string>()

  readonly elapsedMinutes = signal<number>(0);
  readonly elapsedSeconds = signal<number>(0);
  private readonly elapsedMilliseconds = signal<number>(0);

  private readonly isOnTime = signal<boolean>(true);
  private readonly isTooLate = signal<boolean>(false);

  private readonly sla = signal<number>(MINUTES * MILLISECONDS_IN_MINUTES); // Mocked value. minutes * unit, converted to milliseconds

  // private everySecond: Observable<number> = timer(0, POLLING);
  // private subscription!: Subscription;


  readonly pollingDone = signal<boolean>(false);
  private readonly timerDone$ = new Subject<boolean>();

  startPolling(interval: number): Observable<any> {
    return timer(0, interval).pipe(
      takeUntil(this.timerDone$)
    )
  }

  asdas = effect(() => {
    this.timerDone$.next(this.pollingDone())

    if (this.pollingDone() === false) {
      this.startPolling(1000).subscribe((value) => console.log(value))
    }
  })




  ngOnInit(): void {


    // afterNextRender(() => window.onbeforeunload = () => this.ngOnDestroy(), { injector: this.injector });

    // this.subscription = this.everySecond.subscribe((t) => {
    //   const elapsedDateTime = this.getElapsedTime();

    //   console.log(`t: ${t}`);

    //   this.elapsedMinutes.set(Luxon.formatTime(elapsedDateTime.minutes))

    //   // console.log(`elapsedMinutes: ${this.elapsedMinutes()}`)


    //   // this.elapsedSeconds.set(Luxon.formatTime(elapsedDateTime.seconds))
    //   // this.elapsedMilliseconds.set(Luxon.getElapsedMilliseconds(this.lastUpdatedDateTime()))
    //   // this.isOnTime.set(this.updateIsOnTime());
    //   // this.isTooLate.set(this.updateIsToolate());
    // });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // this.subscription.unsubscribe();
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
    return this.elapsedMilliseconds() < this.sla();
  }

  private updateIsToolate(): boolean {
    return !this.isOnTime();
  }
}