import "./messageBubble.css";
import "../conversation/conversation";
import { Message } from "../conversation/conversation";

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
