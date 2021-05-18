import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./Loading.styles.scss";

function Loading() {
  return (
    <div className="Loading">
      <h2>Loading</h2>
      <BeatLoader
        className="Loading__icon"
        color={"#0E76A8"}
        loading={true}
        size={25}
      />
    </div>
  );
}

export default Loading;
