import React from "react";
import Header from "../Header/Header.component";
import Grid from "@material-ui/core/Grid";
import "./Learn.styles.scss";

import OptionLearnGrid from "../OptionLearnGrid/OptionLearnGrid.component";

//ICONS
import { ReactComponent as Python_icon } from "../../images/Python_icon.svg";
import { ReactComponent as Javascript_icon } from "../../images/Javascript_icon.svg";
import { ReactComponent as DataStructures_icon } from "../../images/DataStructures_icon.svg";
import { ReactComponent as SQL_icon } from "../../images/SQL_icon.svg";
import { ReactComponent as Algorithms_icon } from "../../images/Algorithms_icon.svg";

function Learn() {
  return (
    <div>
      <Header />
      <div className="learn">
        <h2 className="learn__title">Learn new skills</h2>
        <div className="learn__topics">
          <Grid container className="learn__grid">
            <Grid item xs={12} md={4}>
              <OptionLearnGrid title="Algorithms" Icon={Algorithms_icon} />
            </Grid>
            <Grid item xs={12} md={4}>
              <OptionLearnGrid title="Python" Icon={Python_icon} />
            </Grid>
            <Grid item xs={12} md={4}>
              <OptionLearnGrid title="Javascript" Icon={Javascript_icon} />
            </Grid>
            <Grid item xs={12} md={4}>
              <OptionLearnGrid
                title="Data Structures"
                Icon={DataStructures_icon}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <OptionLearnGrid title="SQL" Icon={SQL_icon} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Learn;
