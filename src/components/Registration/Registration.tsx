import GoogleLoginComponent from "../../googlebutton.component";
import "./registration.css";

export default function Registration() {
  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    // w jaki sposób i gdzie wysyłać
  };

  return (
    <div className="login-panel">
      <form typeof="submit">
        <div className="title-and-inputs">
          <div className="logo">
            <img src="elComunicadorLogo.png" />
          </div>
          <label className="login-panel-title">
            El Comunicador <br /> la Registrador
          </label>
          <input
            className="username"
            type="text"
            name="name"
            value="Username"
            style={{ borderRadius: "12", height: "30px", width: "300px" }}
          />
          <input
            className="email"
            type="email"
            name="email"
            placeholder="e-mail"
            style={{ borderRadius: "12", height: "30px", width: "300px" }}
          />
          <input
            className="password"
            type="text"
            name="name"
            value="Password"
            style={{ borderRadius: "12", height: "30px", width: "300px" }}
          />
          <button type="submit" onSubmit={handleCreateAccount}>
            Create an account
          </button>
          <div className="login-panel-title">
            <div> or sign in with</div>
          </div>
          <GoogleLoginComponent />
        </div>
      </form>
    </div>
  );
}
