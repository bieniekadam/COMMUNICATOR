import { MessageBubble } from "../MessageBubble/MessageBubble";
import "./Conversation.css";
import { mockedConversations } from "../mocked/MockedConversations";
import { Conversation } from "../../Interfaces/mockedConversations.interface";
import { Message } from "../../Interfaces/mockedConversations.interface";
import { ConversationProps } from "../../Interfaces/conversationProps.interface";
import { start } from "repl";

export function ConversationComponent(props: ConversationProps) {
  const loggedInUserId = 12;

  return (
    <div className="conversation">
      {mockedConversations
        .find((conversation: Conversation) => {
          return conversation.conversationId === props.selectedConversationId;
        })
        ?.messages.map((mockedConversation: Message, index: number) => (
          <div
            key={index}
            className="message-bubble-align-function"
            style={{
              marginLeft:
                mockedConversation.author === loggedInUserId ? "auto" : "0px",
            }}
          >
            <div className="date-time-styling">
              {new String(mockedConversation.dateTime)}
            </div>

            <div className="message-bubble-margins">
              <MessageBubble
                message={mockedConversation}
                user={loggedInUserId}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
