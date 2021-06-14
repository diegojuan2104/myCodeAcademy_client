import React from "react";
import "./Challenge.styles.scss";
import { Link } from "react-router-dom";
function Challenge({ id, title, difficulty }) {
  return (
    <tr className="challenge">
      <td className="challenge__property">
        {id}
      </td>
      <td className="challenge__property "><Link classname="challenge__property--title">{title}</Link></td>
      <td className="challenge__property">{difficulty}</td>
    </tr>
  );
}

export default Challenge;
