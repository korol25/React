import React from 'react';
import classes from './Navigation.module.css'
import { NavLink } from 'react-router-dom';


const Navigation = (props) => {

    let state = props.state;
    let topUsers = state.sidebar.map((bf) => 
        <div className={classes.banner}>
            <img src={bf.src} alt='' />
            <p>{bf.name}</p>
        </div>
    );

    return (
        <div>
            <div className={classes.nav}>
                <nav>
                    <div className={classes.navItem}><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink></div>
                    <div className={classes.navItem}><NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink></div>
                    <div className={classes.navItem}><NavLink to='/users' activeClassName={classes.active}>Users</NavLink></div>
                    <div className={classes.navItem}><NavLink to='/news' activeClassName={classes.active}>News</NavLink></div>
                    <div className={classes.navItem}><NavLink to='/music' activeClassName={classes.active}>Music</NavLink></div>
                    <div className={classes.navItem}><NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink></div>
                </nav>
            </div>
            <div className={classes.friendsBanner}>
                <h3>Friends</h3>
                <div>
                   {topUsers}
                </div>
            </div>
        </div>

    );
}

export default Navigation;