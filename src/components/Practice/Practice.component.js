import React from "react";
import Header from "../Header/Header.component";
import "./Practice.styles.scss";

import Challenge from "../Challenge/Challenge.component";

function Practice() {
  return (
    <div>
      <Header />
      <div className="practice">
        <h2>Challenges</h2>
        <div className="practice__challenge-list">
          <div className="practice__challenge">
            <Challenge
              id="1"
              title="Simple sum"
              description="Develop an algorithm to sum two numbers"
              dificulty="Easy"
            />
          </div>
          <div className="practice__challenge">
            <Challenge
              id="2"
              title="Simple sum"
              description="Develop an algorithm to sum two numbers"
              dificulty="Easy"
            />
          </div>
          <div className="practice__challenge">
            <Challenge
              id="3"
              title="Simple sum"
              description="Develop an algorithm to sum two numbers"
              dificulty="Easy"
            />
          </div>
          <div className="practice__challenge">
            <Challenge
              id="4"
              title="Simple sum"
              description="Develop an algorithm to sum two numbers"
              dificulty="Easy"
            />
          </div>
          <div className="practice__challenge">
            <Challenge
              id="5"
              title="Simple sum"
              description="Develop an algorithm to sum two numbers"
              dificulty="Easy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;
