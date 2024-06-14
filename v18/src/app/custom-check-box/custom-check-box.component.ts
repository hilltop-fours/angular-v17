import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-custom-check-box',
  standalone: true,
  imports: [],
  templateUrl: './custom-check-box.component.html',
  styleUrl: './custom-check-box.component.scss'
})
export class CustomCheckBoxComponent {

  readonly checked = model(false)
  readonly disabled = input(false)

  toggle() {
    this.checked.set(!this.checked())
  }
}
