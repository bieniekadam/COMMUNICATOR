import "./LoginPanel.css";
import { Link } from "react-router-dom";
import GoogleLoginComponent from "../../googlebutton.component";

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
          placeholder="Username"
          style={{ borderRadius: "12", height: "30px", width: "300px" }}
        />
        <input
          className="password"
          type="text"
          name="name"
          placeholder="Password"
          style={{ borderRadius: "12", height: "30px", width: "300px" }}
        />
        <GoogleLoginComponent />
        <Link to="/">
          <button className="submitButton">Submit</button>
        </Link>
      </div>
    </div>
  );
}
