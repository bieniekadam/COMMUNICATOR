import "./MessageBubble.css";
import "../Conversation/Conversation";
import { MessageBubbleProps } from "../../Interfaces/messageBubbleProps.interface";

function MessageBubble(props: MessageBubbleProps) {
  return (
    <div
      className={
        // props.message.author === props.user
          // ? "message-sent"
          // :
           "message-received"
      }
    >
      {props.message}
    </div>
  );
}
export default MessageBubble;
