import "./homepage.css";
import { LeftColumn } from "../leftColumn/LeftColumn";
import { MessageInput } from "../messageInput/messageInput";
import { Conversation } from "../conversation/conversation";

export function Homepage() {
  return (
    <div className="App">
      <LeftColumn />

      <div className="right-column">
        <Conversation />

        <MessageInput />
      </div>
    </div>
  );
}
