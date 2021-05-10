//rfce
import React, { useState } from "react";
import axiosClient from "../../config/axios";
import "./Login.css";

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


  const [login, changeLogin] = useState(false)

  console.log(login);

  const changeLoginAction = (status) => {
    changeLogin(status)
  }


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

      <div className="login__formOptions">
          <button  className={login? "": "selected" } onClick={() => changeLogin(false)}>Sign up</button>
          <button className={login? "selected" : "" } onClick={() => changeLogin(true)}>Log in</button>
        </div>
      <form>
        

        <div className="login__inputs">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            name="username"
          />

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            name="email"
          />

          <input
            type="text"
            placeholder="Your password"
            value={password}
            onChange={handleChange}
            name="password"
          />

          <button type="submit" onClick={onSubmitLogin}>Create an account</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
