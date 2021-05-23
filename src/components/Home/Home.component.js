import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.styles.scss";

import { authenticatedUser } from "../../redux/actions/authActions";
import Header from "../Header/Header.component";
import Logo from "../Logo/Logo.component";

function Home(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const verifyAuthenticatedUser = () => dispatch(authenticatedUser());

  //En caso de mensaje
  useEffect(() => {
    verifyAuthenticatedUser();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="home">
        <div className="home__logo">
          <Logo />
        </div>

        <div className="home__text">
          <p>My Code Academy is a platform to learn and practice algorithms.</p>
          <p>
            The main objective with this project is to help people study more
            programming exercises because this is one of the key parts of
            getting an IT job nowadays in the software development area.
          </p>

          <p>Developer: <span><a href="">@diegojuan2104</a></span></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
