import "./Conversation.css";
import MessageBubble from "../MessageBubble/MessageBubble";
import { useSelector } from "react-redux";

export default function ConversationComponent(props: any) {
  const messageState = useSelector(
    (state: any) => state.ConversationSlice.message
  );
  // const newArr = props.message;
  // const copyOfArr = [...messageState];
  const reversed = messageState.reverse();

  return (
    <div className="conversation">
      {reversed.map((el: string, index: number) => (
        <MessageBubble message={el} user={1} key={index} />
      ))}
    </div>
  );
}
