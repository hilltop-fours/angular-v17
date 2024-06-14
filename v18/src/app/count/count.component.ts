import { Component, WritableSignal, effect, signal } from '@angular/core';
import { CustomCheckBoxComponent } from '../custom-check-box/custom-check-box.component';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [CustomCheckBoxComponent],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss'
})
export class CountComponent {
  readonly count: WritableSignal<number> = signal(0);

  protected isAdmin = signal(false)

  logger = effect(() => {
    console.log(`count: ${this.count()}`);
  })

  increment() {
    this.count.set(this.count() + 1)
  }
}
