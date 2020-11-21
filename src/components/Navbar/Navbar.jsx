import React from 'react';
import classes from './Navbar.module.css'

function Navbar() {
    return <nav className={classes.nav}>
    <ul>
        <li>
            <a className={classes.item} href="#">
                Profile
            </a>
        </li>
        <li>
            <a className={`${classes.item} ${classes.active}`} href="#">
                Messages
            </a>
        </li>
        <li>
            <a className={classes.item} href="#">
                News
            </a>
        </li>
        <li>
            <a className={classes.item} href="#">
                Music
            </a>
        </li>
        <li>
            <a className={classes.item} href="#">
                Settings
            </a>
        </li>
    </ul>
</nav>

}

export default Navbar;