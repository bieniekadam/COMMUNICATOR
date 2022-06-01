import MessageInput from "../MessageInput/MessageInput";
import ConversationComponent from "../Conversation/Conversation";
import "./RightColumn.css";
import { RightColumnProps } from "../../Interfaces/rightColumnProps.interface";

export function RightColumn(props: RightColumnProps) {
  return (
    <div className="right-column">
      <ConversationComponent
        selectedConversationId={props.selectedConversationId}
      />

      <MessageInput />
    </div>
  );
}
