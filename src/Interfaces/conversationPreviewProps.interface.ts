import { Dispatch, SetStateAction } from "react";

export interface ConversationPreviewProps {
  conversation: ConversationPreviewData;
  setConversationId: Dispatch<SetStateAction<number>>;
}

export interface ConversationPreviewData {
  name: string;
  text: string;
  avatarUrl: string;
  conversationId: number;
}
