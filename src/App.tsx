import "./App.css";
import { LoginPanel } from "./components/LoginPanel/LoginPanel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
// import { ScrollHandler } from "./components/ScrollHandler/ScrollHandler";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPanel />} />
        {/* <ScrollHandler />  */}
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
