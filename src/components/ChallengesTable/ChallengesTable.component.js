import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header.component";
import "./ChallengesTable.styles.scss";
import { getChallengesAction } from "../../redux/actions/challengesActions";
import Challenge from "../Challenge/Challenge.component";

function ChallengesTable() {
  const dispatch = useDispatch();
  useEffect( () =>  {
    const getChallengesPetition = () => dispatch(getChallengesAction());
    getChallengesPetition();
  }, [])

  const challenges = useSelector((state) => state.challenges.challengesList)

  return (
    <div className="container">
      <Header />
      <div className="challengesTable">
        <div className="challengesTable__content">
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
          {
            challenges.map(
              (challenge) => (
                <Challenge id={challenge.id} title={challenge.title} difficulty={challenge.difficulty} />
              )
            )
          }
       
        </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ChallengesTable;
