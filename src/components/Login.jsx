import { useState } from "react";
import Button from "../components/Button";
import {useAuth} from "../hooks/AuthContext.jsx";
import "../css/Login.css";

export default function Login({ onChange }) {
  const [hasError, setHasError] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { checkLogin } = useAuth();

  function handleChange(setState) {
    return (event) => {
      setState(event.target.value);
      setHasError(event.target.value.trim().length === 0);
    };
  }
  async function handleLogin() {
    try {
      await checkLogin(userName, password);
      console.log("Login successful");
      onChange("auth")
    } catch (error) {
      console.error("Login failed", error);
    }
    
  }
  return (
    <div className="loginForm">
      <h2>
        <span className="entypo-login">
          <i className="fa fa-sign-in"></i>
        </span>
        Login
      </h2>
      <form className="form">
        <div>
          <span className="inputUserIcon">
            <i className="fa fa-user"></i>
          </span>
          <input
            className="user input"
            placeholder="username"
            value={userName}
            style={{ border: hasError ? "1px solid red" : null }}
            onChange={handleChange(setUserName)}
          />

          <span className="inputPassIcon">
            <i className="fa fa-key"></i>
          </span>
          <input
            type="password"
            className="pass input"
            placeholder="password"
            value={password}
            style={{ border: hasError ? "1px solid red" : null }}
            onChange={handleChange(setPassword)}
          />
        </div>
        <Button
        className="submit"
        onClick={handleLogin}
        >
          <span className="entypo-lock">
            <i className="fa fa-lock"></i>
          </span>
        </Button>
      </form>
      <pre>Name:{userName}</pre>
     
    </div>
  );
}
