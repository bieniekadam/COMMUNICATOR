import "./AddContact.css";
import { FaSearchPlus } from "react-icons/fa";

export function addContact() {
  return (
    <>
      <div className="searching-contact">
        <input type="text" name="name" placeholder="user name..." />
        <FaSearchPlus onClick={() => ""} className="search-button" />
      </div>
      <div className="proposed-contact">
        <div className="user-picture">
          <img src="sc.png"></img>
          <h3>Karol Wojtyła</h3>
        </div>
      </div>
    </>
  );
}
