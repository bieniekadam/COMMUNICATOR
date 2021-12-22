import { ConversationPreview } from "../../Interfaces/conversationPreview.interface";
import "./ContactMessage.css";

export function ContactMessage(message: ConversationPreview): JSX.Element {
  return (
    <div className="user-and-text">
      <div className="avatar">
        <img src={message.avatarUrl} />
      </div>
      <div className="name-and-text">
        <h4>{message.name}</h4>
        <span>{message.text}</span>
      </div>
    </div>
  );
}
