import "./messageBubble.css";
import "../conversation/conversation";

export interface MessageBubbleProps {
  message: string;
  user: number;
}

export function MessageBubble(props: MessageBubbleProps) {
  return (
    <div className={props.user === 12 ? "message-sent" : "message-received"}>
      {props.message}
    </div>
  );
}
