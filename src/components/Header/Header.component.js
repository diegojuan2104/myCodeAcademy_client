import React, { useState } from "react";
import "./Header.styles.scss";
import MenuIcon from "@material-ui/icons/Menu";
import { logoutAction } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";

function Header() {

  const [menuDisplayed, displayMenu] = useState(false);
  const [userMenuDisplayed, displayUserMenu] = useState(false);


  const dispatch = useDispatch();
  const logoutUser = (user) => dispatch (logoutAction(user));
  return (
    <div className="header">
      <MenuIcon className="header__btn-menu" onClick = {()=> displayMenu(!menuDisplayed)}  />
      <div className="header__options">
        <label className="header__logo">My code academy</label>
        <div className={menuDisplayed ? "header__options-left": "header__options-left hidden"}>
          <div className="header__option">
            <a href="">LEARN</a>
          </div>
          <div className="header__option">
            <a href="">PRACTICE</a>
          </div>
          <div className="header__option">
            <a href="">LEADERBOARD</a>
          </div>
        </div>

        <div className={menuDisplayed ? "header__options-right": "header__options-right hidden"}>

          <div className="header__option">
            <a href="">DiegoJuan2104</a>
          </div>
          <div className="header__option">
            <a  href="" onClick={logoutUser}>LOGOUT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
