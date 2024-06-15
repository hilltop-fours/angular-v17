import { Component, input } from '@angular/core';
import { Agent } from '../../interface/agent';
import { AgentComponent } from '../agent/agent.component';
import { ConversationListComponent } from '../conversation-list/conversation-list.component';

@Component({
  selector: 'app-agent-list',
  standalone: true,
  imports: [AgentComponent, ConversationListComponent],
  templateUrl: './agent-list.component.html',
  styleUrl: './agent-list.component.scss'
})
export class AgentListComponent {

  readonly agents = input.required<Agent[]>()
}