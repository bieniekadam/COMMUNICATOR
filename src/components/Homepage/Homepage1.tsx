import { LeftColumn } from "../LeftColumn/LeftColumn";
import { RightColumn } from "../RightColumn/RightColumn1";
import { mockedConversations } from "../mocked/MockedConversations";
import { useState } from "react";

export function Homepage() {
  const [conversationId, setConversationId] = useState(
    mockedConversations[0].conversationId
  );

  return (
    <div className="App">
      <LeftColumn setConversationId={setConversationId} />

      <RightColumn selectedConversationId={conversationId} />
    </div>
  );
}
