import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { AnswerState } from '../../enum/answer-state';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [NgClass, TimerComponent],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {

  readonly fullName = input.required<string>()
  readonly answerState = input.required<AnswerState>()
  readonly lastUpdatedDateTime = input.required<string>()
  readonly senderWasOwner = input.required<boolean>()

  readonly conversationIsNew = signal<boolean>(false)

  ngOnInit(): void {
    this.updateConversationIsNew()
  }

  private updateConversationIsNew(): void {
    this.conversationIsNew.set(this.answerState() === AnswerState.unknown)
  }
}
