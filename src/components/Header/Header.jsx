import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={classes.head}>
      <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"></img>
      <div className={classes.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
          : <NavLink to={'/login'}><button>Login</button></NavLink>}
      </div>
    </div>
  );
}

export default Header;