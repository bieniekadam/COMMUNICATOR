import { MessageBubble } from "../messageBubble/messageBubble";
import "./conversation.css";

interface Message {
  author: number;
  text: string;
}

export function Conversation() {
  const userId = 12;
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
      {messages.map((message: Message) => (
        <div style={{ float: message.author === userId ? "right" : "left" }}>
          <div className="message-bubble-margins">
            <MessageBubble message={message.text} user={userId} />
          </div>
        </div>
      ))}
    </div>
  );
}
