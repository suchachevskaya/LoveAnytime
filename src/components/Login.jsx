import { useState } from "react";
import Button from "../components/Button";
import { account, AUTH_ID, TARGET_ID } from "../Appwrite";
import "../css/Login.css";

export default function Login({ active, onChange }) {
  const [hasError, setHasError] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // async function checkLogin() {
  //   try {
  //     const response = await account.createEmailPasswordSession(
  //       userName,
  //       password
  //     );
  //     console.log("User session created:", response);
  //   } catch (error) {
  //     console.error("Error during login:", error);
  
  //   }
  // }

  function handleChange(setState) {
    return (event) => {
      setState(event.target.value);
      setHasError(event.target.value.trim().length === 0);
    };
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
          isActive={active === "auth"}
          onClick={() => {
              checkLogin();
              onChange("auth");
          }}
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
