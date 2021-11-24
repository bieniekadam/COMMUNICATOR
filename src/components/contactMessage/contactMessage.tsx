import { ConversationPreview } from "../../Interfaces/conversationPreview.interface";
import "./contactMessage.css";

export function ContactMessage(message: ConversationPreview) {
  return (
    <div className="user-and-text">
      <div className="avatar">
        <img src={message.avatarUrl}/>
      </div>
      <div className="name-and-text">
        <h4>{message.name}</h4>
        <span>{message.text}</span>
      </div>
    </div>
  );
}
