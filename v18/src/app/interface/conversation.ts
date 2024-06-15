import { AnswerState } from "../enum/answer-state";
import { ConversationState } from "../enum/conversation-state";

export interface Conversation {
    fullName: string;
    state: ConversationState;
    answerState: AnswerState;
    lastUpdatedDateTime: string;
    senderWasOwner: boolean;
}
