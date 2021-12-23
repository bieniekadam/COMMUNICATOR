import "./MessageInput.css";
import { ConversationFunctionalities } from "../ConversationFunctionalities/ConversationFunctionalities";

export function MessageInput() {
  let text: string;

  return (
    <div className="bottom-row">
      <div className="message-input">
        <div className="top-bar">
          <label>Your message:</label>
          <ConversationFunctionalities />
        </div>
        <textarea onChange={(event: any) => (text = event.target.value)} />
        <button className="send-message">Send</button>
      </div>
    </div>
  );
}
