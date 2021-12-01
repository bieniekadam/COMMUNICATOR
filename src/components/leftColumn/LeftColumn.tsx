import { FaUserPlus } from "react-icons/fa";
import "./LeftColumn.css";
import { ContactMessage } from "../contactMessage/contactMessage";
import { MOCKED_MESSAGES } from "../../mockData/conversationPreview";
import { Popup } from "../popupAddContact/PopupAddContact";
import { useState } from "react";

export function LeftColumn() {
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
        <ContactMessage {...message} />
      ))}

      <Popup
        trigger={showPopup}
        setTrigger={setShowPopup}
        height="600px"
        width="300px"
      >
        <h3>My popup</h3>
      </Popup>
    </div>
  );
}
