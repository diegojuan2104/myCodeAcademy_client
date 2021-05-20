import React, { useState } from "react";
import "./Header.styles.scss";
import MenuIcon from "@material-ui/icons/Menu";
import { logoutAction } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import Logo from "../Logo/Logo.component";

function Header() {
  const [menuDisplayed, displayMenu] = useState(false);
  const [userMenuDisplayed, displayUserMenu] = useState(false);

  const dispatch = useDispatch();
  const logoutUser = (user) => dispatch(logoutAction(user));
  return (
    <div className="header">
      <MenuIcon
        className="header__btn-menu"
        onClick={() => displayMenu(!menuDisplayed)}
      />
      <div className="header__options">
        <Logo size="25px" color="white" />
        <div
          className={
            menuDisplayed
              ? "header__options-left"
              : "header__options-left hidden"
          }
        >
          <div className="header__option">
            <a>LEARN</a>
          </div>
          <div className="header__option">
            <a>PRACTICE</a>
          </div>
          <div className="header__option">
            <a>LEADERBOARD</a>
          </div>
        </div>

        <div
          className={
            menuDisplayed
              ? "header__options-right"
              : "header__options-right hidden"
          }
        >
          <div className="header__option">
            <a>DiegoJuan2104</a>
          </div>
          <div className="header__option">
            <a onClick={logoutUser}>LOGOUT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
