import { ConversationPreviewProps } from "../../Interfaces/conversationPreviewProps.interface";
import "./conversationPreview.css";

export function ConversationPreview(message: ConversationPreviewProps) {
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
