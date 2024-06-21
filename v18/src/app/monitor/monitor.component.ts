import { Component, inject, input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AgentComponent } from '../component/agent/agent.component';
import { AwaitingResponseComponent } from '../component/awaiting-response/awaiting-response.component';
import { TimerComponent } from '../component/timer/timer.component';
import { ConversationState } from '../enum/conversation-state';
import { Agent } from '../interface/agent';
import { AgentMockService } from '../service/agent-mock.service';
import { Luxon } from '../util/luxon';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [AwaitingResponseComponent, AgentComponent, TimerComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.scss'
})
export class MonitorComponent {

  readonly id = input.required<number>()
  private readonly agentService = inject(AgentMockService)

  readonly agents = signal<Agent[]>([])

  readonly customerAwaitingResponse = signal<Agent[]>([])
  readonly csrAwaitingResponse = signal<Agent[]>([])

  constructor() {
    console.log(`constructor`)

    const agents$ = toSignal(this.agentService.getAgents(), { initialValue: [] })
    console.log(`constructor agents$: ${agents$.length}`)

    this.updateAwaitingResponses(agents$())
  }

  private updateAwaitingResponses(agents: Agent[]): void {

    console.log(`updateAwaitingResponses agents: ${agents.length}`)

    if (agents.length > 0) {
      this.agents.set(this.organizeAgents(agents));
      this.customerAwaitingResponse.set(this.getAwaitingResponseAgents(agents, true))
      this.csrAwaitingResponse.set(this.getAwaitingResponseAgents(agents, false))
    }

    console.log(`update agents: ${this.agents().length}`)
    console.log(`customerAwaitingResponse: ${this.customerAwaitingResponse().length}`)
    console.log(`csrAwaitingResponse: ${this.csrAwaitingResponse().length}`)
  }

  private organizeAgents(agents: Agent[]): Agent[] {
    agents = this.sortAgentsAlphabetical(agents);
    agents = this.sortConversationsByTime(agents);
    agents = this.sortConversationsByNew(agents);
    agents = this.removeConversationsStateNotOpen(agents);
    agents = this.removeAgentsNoConversations(agents);
    return agents;
  }

  private sortAgentsAlphabetical(agents: Agent[]): Agent[] {
    return agents.sort(
      (a, b,) => a.firstName.localeCompare(b.firstName)
    );
  }

  private sortConversationsByTime(agents: Agent[]): Agent[] {
    return agents.map(agent => {
      agent.conversations.sort(
        (a, b) => (Luxon.getElapsedMilliseconds(b.lastUpdatedDateTime) - Luxon.getElapsedMilliseconds(a.lastUpdatedDateTime))
      );
      return agent;
    });
  }

  private sortConversationsByNew(agents: Agent[]): Agent[] {
    return agents.map(agent => {
      agent.conversations.sort(
        (a, b) => (a.answerState - b.answerState)
      );
      return agent;
    });
  }

  private removeAgentsNoConversations(agents: Agent[]): Agent[] {
    return agents.filter(agent => agent.conversations.length);
  }

  private removeConversationsStateNotOpen(agents: Agent[]): Agent[] {
    agents = JSON.parse(JSON.stringify(agents));
    agents.map(agent => {
      agent.conversations = agent.conversations.filter(conversation => conversation.state === ConversationState.open);
      return agent;
    });
    return agents;
  }

  private getAwaitingResponseAgents(agents: Agent[], sender: boolean): Agent[] {

    // return agents

    agents.map(agent => {
      agent.conversations = agent.conversations.filter(conversation => conversation.senderWasOwner === sender);
      return agent;
    });
    return this.removeAgentsNoConversations(agents);
  }
}
