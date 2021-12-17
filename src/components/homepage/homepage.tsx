import { LeftColumn } from "../LeftColumn/LeftColumn";
import { RightColumn } from "../RightColumn/RightColumn";

export function Homepage() {
  return (
    <div className="App">
      <LeftColumn />

      <RightColumn />
    </div>
  );
}
