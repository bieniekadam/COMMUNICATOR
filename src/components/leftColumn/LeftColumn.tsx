import { FaUserPlus } from "react-icons/fa";
import "./LeftColumn.css";
import { ContactMessage } from "../contactMessage/contactMessage";

export function LeftColumn() {
  return (
    <header className="left-column">
      <div className="top-left-bar">
        <img src="elComunicadorLogo.png" className="logo-left-panel" />

        <FaUserPlus className="fa-user-plus" />
      </div>

      <ContactMessage />
    </header>
  );
}
