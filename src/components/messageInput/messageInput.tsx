import "./MessageInput.css";
import { ConversationFunctionalities } from "../ConversationFunctionalities/CnversationFunctionalities";

export function MessageInput() {
  return (
    <div className="bottom-row">
      <div className="message-input">
        <div className="top-bar">
          <label>Your message:</label>
          <ConversationFunctionalities />
        </div>
        <textarea />
        <button className="send-message">Send</button>
      </div>
    </div>
  );
}
