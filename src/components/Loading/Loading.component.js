import React from "react";
import BeatLoader from "react-spinners/SkewLoader";
import "./Loading.styles.scss";
import Logo from "../Logo/Logo.component";

function Loading() {
  return (
    <div className="Loading">
      <Logo className="logo" size="25px"/>
      <BeatLoader
        className="Loading__icon"
        color={"#20ac4c"}
        loading={true}
        size={30}
      />
    </div>
  );
}

export default Loading;
