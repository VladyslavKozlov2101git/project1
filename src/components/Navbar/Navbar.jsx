import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

function Navbar() {
    return <nav className={classes.nav}>
    <ul>
        <li className={classes.item}>
            <NavLink  activeClassName={classes.activeLink} to="/profile">
                Profile
            </NavLink>
        </li>
        <li className={`${classes.item} ${classes.active}`}>
            <NavLink activeClassName={classes.activeLink}  to="/dialogs">
                Messages
            </NavLink>
        </li>
        <li className={classes.item}>
            <NavLink activeClassName={classes.activeLink}  to="/news">
                News
            </NavLink>
        </li>
        <li className={classes.item}>
            <NavLink activeClassName={classes.activeLink}  to="/music">
                Music
            </NavLink>
        </li>
        <li className={classes.item}>
            <NavLink activeClassName={classes.activeLink}  to="/setting">
                Settings
            </NavLink>
        </li>
    </ul>
</nav>

}

export default Navbar;