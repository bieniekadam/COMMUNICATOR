import "./App.css";
import { LoginPanel } from "./components/loginPanel/loginPanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/homepage/homepage";

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
