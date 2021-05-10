//rfce
import React, { useState } from "react";
import axiosClient from "../../config/axios";
import "./Login.css";

import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";

function Login() {
  const [user, updateUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = user;

  const handleChange = (e) => {
    updateUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const [login, changeLogin] = useState(false);

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    const res = await axiosClient.post("/api/users/", user);
    console.log(res);
  };
  return (
    <div className="login">
      <h1>My code Academy</h1>
      <h2>For Developers</h2>
      <p>Practice coding, prepare for interviews, and get hired.</p>

      <div className="login__formBox">
        <div className="login__formOptions">
          <button
            className={login ? "" : "selected"}
            onClick={() => changeLogin(false)}
          >
            Sign up
          </button>
          <button
            className={login ? "selected" : ""}
            onClick={() => changeLogin(true)}
          >
            Log in
          </button>
        </div>

        <form>
          <div className="login__inputs">
            <div className="login__inputBox">
              <PersonOutlineIcon />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleChange}
                name="username"
              />
            </div>
            <div className="login__inputBox">
              <MailOutlineIcon />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="login__inputBox">
              <LockIcon />
              <input
                type="text"
                placeholder="Your password"
                value={password}
                onChange={handleChange}
                name="password"
              />
            </div>

            <button type="submit" onClick={onSubmitLogin}>
              Create An Account
            </button>
          </div>
        </form>

        <div className="login__socialConection">
          <div ></div>
          <p> or connect with</p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
