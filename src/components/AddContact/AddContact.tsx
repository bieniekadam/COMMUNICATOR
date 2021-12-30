import "./AddContact.css";
import { FaSearchPlus } from "react-icons/fa";
import { ConversationPreviewData } from "../../Interfaces/conversationPreviewProps.interface";

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
        <div
          className="user-picture"
          onClick={() =>
            props.addContact({
              avatarUrl: "sc.png",
              name: "Karol Wojtyła",
              text: "Nie lękaj się przejśc przez bramę, która jest Chrystus",
              conversationId: 0,
            })
          }
        >
          <img src="sc.png"></img>
          <h3> Karol Wojtyła</h3>
        </div>
      </div>
    </>
  );
}
