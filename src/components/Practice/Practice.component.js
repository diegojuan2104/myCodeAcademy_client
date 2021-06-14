import React from "react";
import Header from "../Header/Header.component";
import "./Practice.styles.scss";

import Challenge from "../Challenge/Challenge.component";

function Practice() {
  return (
    <div>
      <Header />
      <div className="practice">
        <div className="practice__content">
          <h1>Challenges</h1>
          <table className="challenge-table">
          <thead className="challenge-table__head">
          <tr className="head__properties">
            <th className="head__property">id</th>
            <th  className="head__property">title</th>
            <th  className="head__property">Difficulty</th>
          </tr>
        </thead>
        <tbody> 
          <Challenge id="1" title="Sum" difficulty="hard" />
        </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Practice;
