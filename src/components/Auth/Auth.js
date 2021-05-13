//rfce
import React, { useState } from "react";
import axiosClient from "../../config/axios";
import "./Auth.scss";

import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";

import Facebook_icon from "../../images/Facebook_icon.png";
import Google_icon from "../../images/Google_icon.png";
import LinkedIn_icon from "../../images/Linkedin_icon.png";
import Github_icon from "../../images/Github_icon.png";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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

  const [rememberMeChecked, setRememberMeChecked] = useState(true);

  const handleChangeCheck = (event) => {
    setRememberMeChecked(event.target.checked);
  };
  return (
    <div className="auth">
      <h1 className="auth__title">My code Academy</h1>
      <h2 className="auth__subtitle">For Developers</h2>
      <p className="auth__subtitle-text">
        Practice coding, prepare for interviews, and get hired.
      </p>

      <div className="auth__form">
        <div className="auth__form__options">
          <button
            className={
              login
                ? "auth__form__option"
                : "auth__form__option auth__form__option--selected"
            }
            onClick={() => changeLogin(false)}
          >
            Sign up
          </button>
          <button
            className={
              !login
                ? "auth__form__option"
                : "auth__form__option auth__form__option--selected"
            }
            onClick={() => changeLogin(true)}
          >
            Log in
          </button>
        </div>

        <form className="auth__form__form">
          <div className="auth__form__text-inputs">
            {!login && (
              <div className="auth__form__text-input-box">
                <PersonOutlineIcon className="auth__form__text-input-icon" />
                <input
                  className="auth__form__text-input"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleChange}
                  name="username"
                />
              </div>
            )}

            <div className="auth__form__text-input-box">
              <MailOutlineIcon className="auth__form__text-input-icon" />
              <input
                className="auth__form__text-input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                name="email"
              />
            </div>

            <div className="auth__form__text-input-box">
              <LockIcon className="auth__form__text-input-icon" />
              <input
                className="auth__form__text-input"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={handleChange}
                name="password"
              />
            </div>

            {login && (
              <div className="auth__form__login-options">
                <div className="auth__form__login-options-rememberme">
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="default"
                        checked={rememberMeChecked}
                        onChange={handleChangeCheck}
                      />
                    }
                    label="Remember me"
                  />
                </div>

                <a
                  href="#"
                  className="auth__form__login-options-forgot-password"
                >
                  Forgot your password?
                </a>
              </div>
            )}

            <button
              className="auth__form__submit-button"
              type="submit"
              onClick={onSubmitLogin}
            >
              { login ? "Log In" : "Create An Account"}
            </button>
          </div>
        </form>

        <div className="auth__form__social-conection">
          <div></div>
          <p> or connect with</p>
          <div></div>
        </div>

        <div className="auth__form__social-conection-icons">
          <img src={Facebook_icon} alt="" />
          <div></div>
          <img src={Google_icon} alt="" />
          <div></div>
          <img src={LinkedIn_icon} alt="" />
          <div></div>
          <img src={Github_icon} alt="" />
        </div>
      </div>
      <p className="auth__terms">
        By signing up you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  );
}

export default Login;
