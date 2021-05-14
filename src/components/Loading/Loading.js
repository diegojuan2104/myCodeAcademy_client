import React from "react";
import ClipLoader from "react-spinners/SkewLoader";

function Loading({loading}) {
  return (
    <ClipLoader color={"#0E76A8"} loading={loading} size={30} />
  );
}

export default Loading;
