import { ConversationPreviewProps } from "../../Interfaces/conversationPreviewProps.interface";
import "./ConversationPreview.css";

export function ConversationPreview(props: ConversationPreviewProps) {
  return (
    <div
      onClick={() => props.setConversationId(props.conversation.conversationId)}
      className="user-and-text"
      id="conversationID"
    >
      <div className="avatar">
        <img src={props.conversation.avatarUrl} />
      </div>
      <div className="name-and-text">
        <h4>{props.conversation.name}</h4>
        <span>{props.conversation.text}</span>
      </div>
    </div>
  );
}
