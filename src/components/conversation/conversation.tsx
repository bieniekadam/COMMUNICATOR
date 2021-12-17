import { MessageBubble } from "../MessageBubble/MessageBubble";
import "./Conversation.css";
import { messages } from "../mocked/mockedConversation";

export interface Message {
  author: number;
  text: string;
}

export function Conversation() {
  const loggedInUserId = 12;

  return (
    <div className="conversation">
      {messages.map((message: Message, index: number) => (
        <div
          key={index}
          className="messageBubbleAlignFunction"
          style={{
            marginLeft: message.author === loggedInUserId ? "auto" : "0px",
          }}
        >
          <div className="message-bubble-margins">
            <MessageBubble message={message} user={loggedInUserId} />
          </div>
        </div>
      ))}
    </div>
  );
}
