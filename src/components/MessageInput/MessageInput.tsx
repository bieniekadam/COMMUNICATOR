import "./MessageInput.css";
import { ConversationFunctionalities } from "../ConversationFunctionalities/ConversationFunctionalities";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../store/ConversationSlice";

export default function MessageInput(props: any) {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  return (
    <div className="bottom-row">
      <div className="message-input">
        <div className="top-bar">
          <label>Your message:</label>
          <ConversationFunctionalities />
        </div>

        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(sendMessage(textInput));
          }}
          className="send-message"
        >
          Send
        </button>
      </div>
    </div>
  );
}
