//rfce
import React, { useState } from "react";
import axiosClient from "../../config/axios";
import "./Auth.scss";

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
    <div className="auth">
      <h1 className="auth__title">My code Academy</h1>
      <h2 className="auth__subtitle">For Developers</h2>
      <p className="auth__subtitle-text">
        Practice coding, prepare for interviews, and get hired.
      </p>

      <div className="auth-form">
        <div className="auth-form__options">
          <button
            className={
              login
                ? "auth-form__option"
                : " auth-form__option auth-form__option--selected"
            }
            onClick={() => changeLogin(false)}
          >
            Sign up
          </button>
          <button
            className={
              !login
                ? "auth-form__option"
                : " auth-form__option auth-form__option--selected"
            }
            onClick={() => changeLogin(true)}
          >
            Log in
          </button>
        </div>

        <form className="auth-form__form">
          <div className="auth-form__text-inputs">
            <div className="auth-form__text-input-box">
              <PersonOutlineIcon />
              <input
                className="auth-form__text-input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleChange}
                name="username"
              />
            </div>
            <div className="auth-form__text-input-box">
              <MailOutlineIcon />
              <input
                className="auth-form__text-input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="auth-form__text-input-box">
              <LockIcon />
              <input
                className="auth-form__text-input"
                type="text"
                placeholder="Your password"
                value={password}
                onChange={handleChange}
                name="password"
              />
            </div>

            <button className="auth-form__submit-button" type="submit" onClick={onSubmitLogin}>
              Create An Account
            </button>
          </div>
        </form>

        <div className="auth-form__social-conection">
          <div></div>
          <p> or connect with</p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
