import { Dispatch, SetStateAction } from "react";

export interface ConversationPreviewProps {
  conversation: ConversationPreview;
  setConversationId: Dispatch<SetStateAction<number>>;
}

export interface ConversationPreview {
  name: string;
  text: string;
  avatarUrl: string;
  conversationId: number;
}
