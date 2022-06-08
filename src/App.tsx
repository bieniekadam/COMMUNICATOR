import "./App.css";
import { LoginPanel } from "./components/LoginPanel/LoginPanel";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
import Registration from "./components/Registration/Registration";
import { useState } from "react";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  // isLogged needs to get data from 0auth token

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/"
          element={isLogged ? <Homepage /> : <Navigate to="/registration" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
