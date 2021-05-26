import React from "react";
import Header from "../Header/Header.component";
import "./Leaderboard.styles.scss";


function Leaderboard() {
  return (
    <div>
      <Header />
      <div className="leaderboard">
        <h2 className="leaderboard__title">Leaderboard</h2>
        <div className="leaderboard__challenge-list">
          <div className="leaderboard_user">
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
