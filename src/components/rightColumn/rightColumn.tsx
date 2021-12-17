import { MessageInput } from "../MessageInput/MessageInput";
import { Conversation } from "../Conversation/Conversation";
import "./RightColumn.css";

export function RightColumn() {
  return (
    <div className="right-column">
      <Conversation />

      <MessageInput />
    </div>
  );
}
