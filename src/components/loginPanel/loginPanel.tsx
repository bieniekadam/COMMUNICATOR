import "./loginPanel.css";
import { Link } from "react-router-dom";

export function LoginPanel() {
  return (
    <div className="login-panel">
      <div className="title-and-inputs">
        <div className="logo">
          <img src="elComunicadorLogo.png" />
        </div>
        <label className="login-panel-title">El Comunicador</label>
        <input
          className="username"
          type="text"
          name="name"
          value="Username"
          style={{ borderRadius: "12", height: "30px", width: "300px" }}
        />
        <input
          className="password"
          type="text"
          name="name"
          value="Password"
          style={{ borderRadius: "12", height: "30px", width: "300px" }}
        />

        <Link to="/">
          <button className="submitButton">Submit</button>
        </Link>
      </div>
    </div>
  );
}
