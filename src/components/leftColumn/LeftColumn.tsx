import { FaUserPlus } from "react-icons/fa";
import "./LeftColumn.css";
import { ContactMessage } from "../contactMessage/contactMessage";
import { MOCKED_MESSAGES } from "../../mockData/conversationPreview";

export function LeftColumn() {
  const messages = MOCKED_MESSAGES;

  return (
    <header className="left-column">
      <div className="top-left-bar">
        <img src="elComunicadorLogo.png" className="logo-left-panel" />

        <FaUserPlus className="fa-user-plus" />
      </div>
      {messages.map((message) => (
        <ContactMessage {...message} />
      ))}
    </header>
  );
}
