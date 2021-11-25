import { MessageInput } from "../messageInput/messageInput";
import { Conversation } from "../conversation/conversation";
import "./rightColumn.css";

export function RightColumn() {
  return (
    <div className="right-column">
      <Conversation />

      <MessageInput />
    </div>
  );
}
