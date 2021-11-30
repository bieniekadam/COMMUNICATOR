import { MessageBubble } from "../messageBubble/messageBubble";
import "./conversation.css";
import { messages } from "../mocked/mockedMessages";

export interface Message {
  author: number;
  text: string;
  dateTime: string;
}

export function Conversation() {
  const loggedInUserId = 12;

  return (
    <div className="conversation">
      {messages.map((message: Message, index: number) => (
        <div
          key={index}
          className="message-bubble-align-function"
          style={{
            marginLeft: message.author === loggedInUserId ? "auto" : "0px",
          }}
        >
          <div className="date-time-styling">
            {new String(message.dateTime)}
          </div>

          <div className="message-bubble-margins">
            <MessageBubble message={message} user={loggedInUserId} />
          </div>
        </div>
      ))}
    </div>
  );
}
