import React, { useState, useEffect } from "react";
import "./AuthForm.styles.scss";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loginAction, signupAction } from "../../redux/actions/authActions";

import Loading from "../Loading/Loading.component";
import Logo from "../Logo/Logo.component";
import { CameraAltOutlined } from "@material-ui/icons";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import { validateEmail } from "../utils/validations";

function Auth(props) {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    if (authenticated) {
      props.history.push("/about");
    }
    //eslint-disable-next-line
  }, [authenticated]);

  const loginUser = (user) => dispatch(loginAction(user));
  const signupUser = (user) => dispatch(signupAction(user));

  const [alert, updateAlert] = useState("");
  const [user, updateUser] = useState({
    email: "",
    password: "",
    username: "",
    photo_url: "",
  });

  const { email, password, username, photo_url } = user;

  const onSubmitLogin = async (e) => {
    e.preventDefault();

    //Validation
    if (!validateEmail(email)) {
      updateAlert("Email should be valid");
      return;
    }

    if (login) {
      loginUser(user).then(() => {
        updateAlert("");
        if (authenticated) {
          props.history.push("/dashboard");
        }
      });
    } else {
      if (password.length < 6) {
        updateAlert("Password should have at least 6 characters");
        return;
      }

      if (username.length < 3 || username.length > 10) {
        updateAlert("Username length should be between 3 and 10 characters");
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

  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="authForm">
          <header>
            <h1>
              <Logo className="logo" size="35px" />
            </h1>
            <h2>Practice and learn to code by solving challenges</h2>
          </header>

          <div className="form-box">
            <div className="form-options">
              <button
                aria-label="Change to log in"
                className={
                  !login ? "form-option" : "form-option form-option--selected"
                }
                onClick={() => {
                  changeLogin(true);
                  updateAlert("");
                }}
              >
                Log in
              </button>

              <button
                aria-label="Change to Sign up"
                className={
                  login ? "form-option" : "form-option form-option--selected"
                }
                onClick={() => {
                  changeLogin(false);
                  updateAlert("");
                }}
              >
                Sign up
              </button>
            </div>

            <form>
              <div className="text-inputs">
                <div className="input-box">
                  <MailOutlineIcon className="input-icon" />
                  <input
                    aria-label="Email"
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>

                <div className="input-box">
                  <LockIcon className="input-icon" />
                  <input
                    aria-label="Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                    name="password"
                  />
                </div>

                {!login && (
                  <div className="input-box">
                    <PersonOutlineIcon className="input-icon" />
                    <input
                      aria-label="Username"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={handleChange}
                      name="username"
                    />
                  </div>
                )}

                {!login && (
                  <div className="input-box">
                    <CameraAltOutlined className="input-icon" />
                    <input
                      aria-label="photo URL"
                      className="text-input"
                      type="text"
                      placeholder="Photo URL (Optional)"
                      value={photo_url}
                      onChange={handleChange}
                      name="photo_url"
                    />
                  </div>
                )}

                {alert != "" && <p className="alert-box">{alert}</p>}
                <button
                  className="submit-button"
                  type="submit"
                  onClick={onSubmitLogin}
                >
                  {login ? "Log In" : "Create An Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Auth;
