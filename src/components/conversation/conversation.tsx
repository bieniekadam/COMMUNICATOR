import { MessageBubble } from "../messageBubble/messageBubble";
import "./conversation.css";

export interface Message {
  author: number;
  text: string;
}

export function Conversation() {
  const loggedInUserId = 12;
  const messages: Message[] = [
    {
      author: 12,
      text: "aspdfoij",
    },
    {
      author: 13,
      text: "qwerrzrzrzrrzrzr",
    },
    {
      author: 12,
      text: "zxcv",
    },
  ];

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
