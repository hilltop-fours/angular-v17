import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnswerState } from './enum/answer-state';
import { ConversationState } from './enum/conversation-state';
import { Agent } from './interface/agent';
import { Conversation } from './interface/conversation';
import { MonitorComponent } from './monitor/monitor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonitorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v18';

  readonly agents: Agent[] = [
    {
      id: `1231231`,
      firstName: `first`,
      lastName: `last`,
      conversations: []
    },
    {
      id: `1231232`,
      firstName: `first`,
      lastName: `last`,
      conversations: []
    }
  ]

  fullName = `first last`;
  answerState = AnswerState.unknown
  lastUpdatedDateTime = 'asdasdasdas'
  senderWasOwner = true

  readonly conversations: Conversation[] = [
    {
      fullName: `first last`,
      state: ConversationState.unknown,
      answerState: AnswerState.unknown,
      lastUpdatedDateTime: 'asdasdasdas',
      senderWasOwner: true
    }
  ]
}

