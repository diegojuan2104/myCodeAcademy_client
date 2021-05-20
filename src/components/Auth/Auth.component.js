//rfce
import React, { useState, useEffect } from "react";
import "./Auth.styles.scss";

//MaterialUI
import Facebook_icon from "../../images/Facebook_icon.png";
import Google_icon from "../../images/Google_icon.png";
import LinkedIn_icon from "../../images/Linkedin_icon.png";
import Github_icon from "../../images/Github_icon.png";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";

import { authenticatedUser } from "../../redux/actions/authActions";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loginAction, signupAction } from "../../redux/actions/authActions";

import Loading from "../Loading/Loading.component";

import Logo from "../Logo/Logo.component"

function Login(props) {

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const authenticated = useSelector((state) => state.auth.authenticated);
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    if(authenticated){
      props.history.push("/home");
    }
    //eslint-disable-next-line
  }, [authenticated]);

  const loginUser = (user) => dispatch(loginAction(user));
  const signupUser = (user) => dispatch(signupAction(user));

  const [user, updateUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = user;

  const onSubmitLogin = async (e) => {
    e.preventDefault();

    //Validation
    if (email.trim() === "" || password.trim() === "") {
      alert("Must fill all the fields.");
      return;
    }

    if (login) {
      loginUser(user).then(() =>
        {
          if(authenticated) {
            props.history.push("/home");
          }
        }
      );
    } else {
      //Username validation
      if (username.trim() === "") {
        alert("Must fill all the fields");
        return;
      }
      signupUser(user);
    }
  };

  const handleChange = (e) => {
    updateUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const [login, changeLogin] = useState(false);

  const [rememberMeChecked, setRememberMeChecked] = useState(true);

  const handleChangeCheck = (event) => {
    setRememberMeChecked(event.target.checked);
  };

  const commingSoon = () => {
    alert("Coming Soon! You can do a normal registration for now.");
  };


  const mediaQuery = window.matchMedia('(min-width: 768px)')

  console.log(mediaQuery)
  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="auth">
          <div className="auth__title"> <Logo  size="35px"/></div>
          <h2 className="auth__subtitle">For Developers</h2>
          <p className="auth__subtitle-text">
            Practice coding, prepare for interviews, and get hired.
          </p>

          <div className="auth__form">
            <div>
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
                    {login ? "Log In" : "Create An Account"}
                  </button>
                </div>
              </form>

              <div className="auth__form__social-conection">
                <div></div>
                <p> or connect with</p>
                <div></div>
              </div>

              <div className="auth__form__social-conection-icons">
                <img src={Facebook_icon} alt="" onClick={commingSoon} />
                <div></div>
                <img src={Google_icon} alt="" onClick={commingSoon} />
                <div></div>
                <img src={LinkedIn_icon} alt="" onClick={commingSoon} />
                <div></div>
                <img src={Github_icon} alt="" onClick={commingSoon} />
              </div>
            </div>
          </div>
          <p className="auth__terms">
            By signing up you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
