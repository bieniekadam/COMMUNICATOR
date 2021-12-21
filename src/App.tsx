import "./App.css";
import { LoginPanel } from "./components/LoginPanel/LoginPanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPanel />} />

        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}
