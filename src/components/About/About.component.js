import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./About.styles.scss";

import { authenticatedUser } from "../../redux/actions/authActions";
import Header from "../Header/Header.component";


function About() {
  return (
    <div className="container">
      <Header />
      <div className="about">
        <div className="about__content">
          <h1>About</h1>
          <div className="about__text">
            <p>Welcome! </p>
            <p>
              My Code Academy is a platform that helps you learn, train, and
              improve your coding skills by solving programming challenges of
              many types and difficulty levels.
            </p>

            <p>
              After solving a task, you will scale in the leaderboard, and you
              will be able to compare your answer with other users to learn from
              them.
            </p>

            <p>
              Now that you are authenticated, you can solve a few challenges and
              start learning!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
