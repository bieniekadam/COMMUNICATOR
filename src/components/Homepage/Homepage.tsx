import { LeftColumn } from "../LeftColumn/LeftColumn";
import { RightColumn } from "../RightColumn/RightColumn";
import { useState } from "react";
import { MOCKED_MESSAGES } from "../../mockData/mockedConversationPreview";

export function Homepage() {
  const [conversationId, setConversationId] = useState(
    MOCKED_MESSAGES[0].conversationId
  );

  return (
    <div className="App">
      <LeftColumn setConversationId={setConversationId} />

      <RightColumn selectedConversationId={conversationId} />
    </div>
  );
}
