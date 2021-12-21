import "./MessageBubble.css";
import "../Conversation/Conversation";
import { MessageBubbleProps } from "../../Interfaces/messageBubbleProps.interface";

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
