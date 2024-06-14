import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  firstName = input<string>('', { alias: 'voornaam' })
  lastName = input.required<string>({ alias: 'achternaam' })
}
