//rfce
import React, { useState } from "react";
import axiosClient from "../../config/axios"


function Login() {
  const [user, updateUser] = useState({
    email: "",
    password: "",
    username: ""
  });
  const { email, password, username } = user;

  const handleChange = (e) => {
    updateUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    const res = await axiosClient.post("/api/users/", user)
    console.log(res);

  }
  return (
    <form onSubmit={onSubmitLogin}>

    <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleChange}
        name="username"
      />

      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={handleChange}
        name="email"
      />

      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={handleChange}
        name="password"
      />

      <button type="submit">Sign up</button>
    </form>
  );
}

export default Login;
