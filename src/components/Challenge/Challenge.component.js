import React from "react";
import "./Challenge.styles.scss";

function Challenge({ id, title, dificulty, description }) {
  return (
    <div className="challenge">
      <div className="challenge__text-content">
        <h3>
          {id}) {title}
        </h3>
        <p className="challenge__description">{description}</p>
        <p className="challenge__dificulty">Difficult: {dificulty}</p>
      </div>
      <div className="challenge__solve-button">
        <button>Solve Challenge</button>
      </div>
    </div>
  );
}

export default Challenge;
