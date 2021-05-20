import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./Loading.styles.scss";
import Logo from "../Logo/Logo.component";

function Loading() {
  return (
    <div className="Loading">
      <Logo size="45px"/>
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
