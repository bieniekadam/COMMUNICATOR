import { LeftColumn } from "../leftColumn/LeftColumn";
import { RightColumn } from "../rightColumn/rightColumn";

export function Homepage() {
  return (
    <div className="App">
      <LeftColumn />

      <RightColumn />
    </div>
  );
}
