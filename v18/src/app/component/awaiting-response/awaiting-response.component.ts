import { Component, input } from '@angular/core';
import { Agent } from '../../interface/agent';
import { AgentListComponent } from '../agent-list/agent-list.component';

@Component({
  selector: 'app-awaiting-response',
  standalone: true,
  imports: [AgentListComponent],
  templateUrl: './awaiting-response.component.html',
  styleUrl: './awaiting-response.component.scss'
})
export class AwaitingResponseComponent {

  readonly columns = input.required<number>()
  readonly header = input.required<string>()
  readonly agents = input.required<Agent[]>()
}
