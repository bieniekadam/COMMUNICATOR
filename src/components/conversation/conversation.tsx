import "./conversation.css";
import { Message } from "../message/message";

export function Conversation() {
  return (
    <div className="conversation">
      <div
        className="message-received"
        style={{
          background: "lightgray",
          height: "20px",
          width: "10%",
          textAlign: "left",
          padding: "5px",
          marginLeft: "5%",
          borderRadius: 15,
          borderTopLeftRadius: 0,
          display: "flex",
          paddingLeft: 15,
          minWidth: 50,
        }}
      >
        <Message />
        hellooo
      </div>

      <div
        className="message-sent"
        style={{
          background: "lightblue",
          height: "20px",
          width: "10%",
          textAlign: "left",
          padding: "5px",
          marginLeft: "85%",
          borderRadius: 15,
          borderTopRightRadius: 0,
          display: "flex",
          paddingLeft: 15,
          minWidth: 50,
        }}
      >
        <Message />
        hey, guy
      </div>

      <div
        className="message-received"
        style={{
          background: "lightgray",
          height: "20px",
          width: "10%",
          textAlign: "left",
          padding: "5px",
          marginLeft: "5%",
          borderRadius: 15,
          borderTopLeftRadius: 0,
          display: "flex",
          paddingLeft: 15,
          minWidth: 50,
        }}
      >
        <Message />
        sup brother
      </div>
    </div>
  );
}
