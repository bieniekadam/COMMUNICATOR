import { FaUserPlus } from "react-icons/fa";
import "./LeftColumn.css";
import { ConversationPreview } from "../ConversationPreview/ConversationPreview";
import { MOCKED_MESSAGES } from "../../mockData/mockedConversationPreview";
import { Popup } from "../PopupAddContact/PopupAddContact";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LeftColumnProps } from "../../Interfaces/leftColumnProps.interface";

export function LeftColumn(props: LeftColumnProps) {
  const messages = MOCKED_MESSAGES;
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="left-column">
      <div className="top-left-bar">
        <img src="elComunicadorLogo.png" className="logo-left-panel" />

        <FaUserPlus
          onClick={() => setShowPopup(true)}
          className="fa-user-plus"
        />
      </div>

      {messages.map((message) => (
        <ConversationPreview
          conversation={message}
          setConversationId={props.setConversationId}
        />
      ))}

      <Popup trigger={showPopup} setTrigger={setShowPopup}>
        <h3>My popup</h3>
      </Popup>

      <Link to="/login">
        <button className="log-out-button">Log out</button>
      </Link>
    </div>
  );
}
