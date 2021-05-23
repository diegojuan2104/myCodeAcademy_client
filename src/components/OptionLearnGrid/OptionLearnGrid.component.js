import { SvgIcon } from "@material-ui/core";
import React from "react";
import "./OptionLearnGrid.styles.scss";


function OptionLearnGrid({ title, Icon }) {
  return (
    <div className="optionLearnGrid">
      {Icon && <Icon className="optionLearnGrid__icon" />}
      <h3>{title}</h3>
    </div>
  );
}

export default OptionLearnGrid;
