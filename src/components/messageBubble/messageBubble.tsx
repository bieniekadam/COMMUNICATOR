import "./MessageBubble.css";
import "../Conversation/Conversation";
import { Message } from "../Conversation/Conversation";

export interface MessageBubbleProps {
  message: Message;
  user: number;
}

export function MessageBubble(props: MessageBubbleProps) {
  return (
    <div
      className={
        props.message.author === props.user
          ? "message-sent"
          : "message-received"
      }
    >
      {props.message.text}
    </div>
  );
}
