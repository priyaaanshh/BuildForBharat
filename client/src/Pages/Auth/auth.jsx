import { useState } from "react";
import "./auth.css";
export const Auth = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });
  const [registerCredentials, setRegisterCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setRegisterCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log("Login with", loginCredentials);
  };

  const handleSignUp = () => {
    console.log("Login with", loginCredentials);
  };

  return (
    <div className="AuthContainer">
      <div className="Auth">
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={loginCredentials.username}
          onChange={isLogin ? handleLoginChange : handleSignUpChange}
        />
        {!isLogin ? (
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={registerCredentials.email}
            onChange={handleSignUpChange}
          />
        ) : (
          <></>
        )}
        <input
          type={isPasswordHidden ? "password" : "text"}
          name="password"
          placeholder="Enter Password"
          value={loginCredentials.password}
          onChange={isLogin ? handleLoginChange : handleSignUpChange}
        />
        <div className="showPassword">
          <input
            className="showPasswordInput"
            type="checkbox"
            value={isPasswordHidden}
            onClick={() => {
              setIsPasswordHidden(!isPasswordHidden);
            }}
          />
          Show Password
        </div>
        {isLogin ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleSignUp}>SignUp</button>
        )}
        {isLogin ? (
          <div
            className="createAccountText"
            onClick={() => setIsLogin(!isLogin)}
          >
            Create new account
          </div>
        ) : (
          <div
            className="createAccountText"
            onClick={() => setIsLogin(!isLogin)}
          >
            Login
          </div>
        )}
      </div>
    </div>
  );
};
