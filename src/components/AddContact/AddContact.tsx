import "./AddContact.css";
import { FaSearchPlus } from "react-icons/fa";
import {
  ConversationPreviewData,
  ConversationPreviewProps,
} from "../../Interfaces/conversationPreviewProps.interface";

export function AddContact(props: {
  addContact: (contact: ConversationPreviewData) => void;
}) {
  return (
    <>
      <div className="searching-contact">
        <input type="text" name="name" placeholder="user name..." />
        <FaSearchPlus onClick={() => ""} className="search-button" />
      </div>
      <div className="proposed-contact">
        <div className="user-picture">
          <img
            src="sc.png"
            onClick={() =>
              props.addContact({
                avatarUrl: "sc.png",
                name: "Karol Wojtyła",
                text: "",
                conversationId: 0,
              })
            }
          ></img>
          <h3> Karol Wojtyła</h3>
        </div>
      </div>
    </>
  );
}
