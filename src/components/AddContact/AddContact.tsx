import "./AddContact.css";
import { FaSearchPlus } from "react-icons/fa";
import { ConversationPreview } from "../../Interfaces/conversationPreview.interface";

export function AddContact(props: {
  addContact: (contact: ConversationPreview) => void;
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
              })
            }
          ></img>
          <h3> Karol Wojtyła</h3>
        </div>
      </div>
    </>
  );
}
