import React, { useState } from "react";
import "./Header.styles.scss";
import MenuIcon from "@material-ui/icons/Menu";
import { logoutAction } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../Logo/Logo.component";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";


function Header() {
  const [menuDisplayed, displayMenu] = useState(false);
  //const [userMenuDisplayed, displayUserMenu] = useState(false);

  const dispatch = useDispatch();
  const logoutUser = (user) => dispatch(logoutAction(user));

  const user = useSelector((state) => state.auth.user);

  return (
    <header className="header">
      <MenuIcon
        className="header__btn-menu"
        onClick={() => displayMenu(!menuDisplayed)}
      />
     
      
      <nav className="header__options">
        <Logo className="header__logo" size="25px" color="white" />
        <div
          className={
            menuDisplayed
              ? "header__options-left"
              : "header__options-left hidden"
          }
        >
          <NavLink activeClassName="header__option--active" className="header__option menu__option" to="/about">
            about
          </NavLink>
          <NavLink  activeClassName="header__option--active" className="header__option menu__option" to="/practice">
            practice
          </NavLink>
          <NavLink activeClassName="header__option--active" className="header__option menu__option" to="/leaderboard">
            leaderboard
          </NavLink>
         
        </div>

        <div
          className={
            menuDisplayed
              ? "header__options-right"
              : "header__options-right hidden"
          }
        >
          <NavLink  onClick={logoutUser} className="header__option header__option--avatar" to="/">
             <Avatar variant="square" src={user?.photo_url? user.photo_url : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"}/> 
             <span className="header__option--avatar__username">{user?.username}</span>  
           </NavLink> 
          <NavLink className="header__option" onClick={logoutUser} to="/">
            Log Out
          </NavLink>
        </div>
      
      </nav>
    
    </header>
  );
}

export default Header;
