import { Component, inject, input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AgentComponent } from '../component/agent/agent.component';
import { AwaitingResponseComponent } from '../component/awaiting-response/awaiting-response.component';
import { ConversationState } from '../enum/conversation-state';
import { Agent } from '../interface/agent';
import { AgentMockService } from '../service/agent-mock.service';
import { Luxon } from '../util/luxon';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [AwaitingResponseComponent, AgentComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.scss'
})
export class MonitorComponent {

  readonly id = input.required<number>()
  private readonly agentService = inject(AgentMockService)

  readonly agents = signal<Agent[]>([])
  private readonly agents$ = signal<Agent[]>([])

  readonly customerAwaitingResponse = signal<Agent[]>([])
  readonly csrAwaitingResponse = signal<Agent[]>([])

  constructor() {
    // const data$ = this.agentService.getAgents().subscribe({
    //   next: (data: Agent[]) => { this.agents.set(data) },
    //   error: (error: Error) => { console.error(error) },
    //   complete: () => { this.updateAwaitingResponses(this.agents()) }
    // })

    const data$ = this.agentService.getAgents()
    const data = toSignal(data$, { initialValue: [] })
    this.agents.set(data())
    this.updateAwaitingResponses(this.agents())
  }

  private updateAwaitingResponses(agents: Agent[]): void {
    console.log('agents', agents)
    console.log('agents.length', agents.length)
    if (agents.length > 0) {
      this.agents.set(this.organizeAgents(agents));

      const aaa = this.getAwaitingResponseAgents(agents, true);
      this.customerAwaitingResponse.set(this.getAwaitingResponseAgents(agents, true))
      // this.csrAwaitingResponse.set(this.getAwaitingResponseAgents(agents, false))
    }
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
    console.log('sender', sender)
    agents = JSON.parse(JSON.stringify(agents));
    return agents

    agents.map(agent => {
      agent.conversations = agent.conversations.filter(conversation => conversation.senderWasOwner === sender);
      return agent;
    });
    return this.removeAgentsNoConversations(agents);
  }
}
