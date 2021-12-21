export interface Conversation {
  conversationId: number;
  messages: Message[];
}

export interface Message {
  author: number;
  text: string;
  dateTime: string;
}
