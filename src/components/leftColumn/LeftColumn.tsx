import { FaUserPlus } from "react-icons/fa";
import "./LeftColumn.css";
import { Link } from "react-router-dom";
import { LeftColumnProps } from "../../Interfaces/leftColumnProps.interface";
import { ConversationPreviewData } from "../../Interfaces/conversationPreviewProps.interface";
import { MOCKED_MESSAGES } from "../../mockData/mockedConversationPreview";
import { AddContact } from "../AddContact/AddContact";
import { ConversationPreview } from "../ConversationPreview/ConversationPreview";
import Popup from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../store/ConversationSlice";

export default function LeftColumn(props: LeftColumnProps) {
  const dispatch = useDispatch();
  const popupState = useSelector((state: any) => state.ConversationSlice.popup);
  console.log(popupState, "1234");

  const messages = MOCKED_MESSAGES;

  function addContact(contact: ConversationPreviewData) {
    const existingContact: ConversationPreviewData | undefined = messages.find(
      (message: ConversationPreviewData) => {
        return contact.conversationId === message.conversationId;
      }
    );

    if (!existingContact) {
      messages.push(contact);
    }
  }

  return (
    <div className="left-column">
      <div className="top-left-bar">
        <img src="elComunicadorLogo.png" className="logo-left-panel" />

        <FaUserPlus
          onClick={() => {
            dispatch(setPopup(true));
          }}
          className="fa-user-plus"
        />
      </div>

      <div className="messages">
        {messages.map((message, key) => (
          <ConversationPreview
            conversation={message}
            setConversationId={props.setConversationId}
            key={key}
          />
        ))}
      </div>

      {popupState ? (
        <Popup height="600px" width="300px" title="Find user">
          <AddContact addContact={addContact} />
        </Popup>
      ) : null}
      <Link to="/login">
        <button className="log-out-button">Log out</button>
      </Link>
    </div>
  );
}
