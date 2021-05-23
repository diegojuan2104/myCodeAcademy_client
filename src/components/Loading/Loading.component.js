import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./Loading.styles.scss";
import Logo from "../Logo/Logo.component";

function Loading() {
  return (
    <div className="Loading">
      <Logo size="25px"/>
      <h3>Loading</h3>
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
