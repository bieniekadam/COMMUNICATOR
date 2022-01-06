import "./AddContact.css";
import { FaSearchPlus } from "react-icons/fa";
import { ConversationPreviewData } from "../../Interfaces/conversationPreviewProps.interface";
import { PROPOSED_CONTACTS } from "../../mockData/mockedProposedContact";
import { ConversationPreview } from "../ConversationPreview/ConversationPreview";
import { useState } from "react";

export function AddContact(props: {
  addContact: (contact: ConversationPreviewData) => void;
}) {
  let [foundContacts, setFoundContacts] = useState(PROPOSED_CONTACTS);

  function filterContacts(query: string): ConversationPreviewData[] {
    if (!query) {
      return PROPOSED_CONTACTS;
    }

    return foundContacts.filter((person) => {
      return person.name.includes(query);
    });
  }

  return (
    <>
      <div className="searching-contact">
        <input
          type="search"
          name="name"
          placeholder="user name..."
          onChange={(query) =>
            setFoundContacts(filterContacts(query.currentTarget.value))
          }
        />
        <FaSearchPlus onClick={() => ""} className="search-button" />
      </div>
      <div className="proposed-contact">
        how to find
        <div className="found-contacts">
          {foundContacts.map((foundContact) => (
            <ConversationPreview
              conversation={foundContact}
              setConversationId={(id) =>
                props.addContact(
                  foundContacts.find(
                    (contact) => contact.conversationId === id
                  ) as ConversationPreviewData
                )
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
