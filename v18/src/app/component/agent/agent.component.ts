import { Component, input } from '@angular/core';

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.scss'
})
export class AgentComponent {

  readonly firstName = input.required<string>()
  readonly lastName = input.required<string>()
  readonly picture = input<string>()
}
