import { Conversation } from "./conversation";

export interface Agent {
    id: string;
    firstName: string;
    lastName: string;
    conversations: Conversation[];
}
