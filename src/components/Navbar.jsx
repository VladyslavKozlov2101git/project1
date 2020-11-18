import React from 'react';
import './Navbar.css'

function Navbar() {
    return <nav className="nav">
    <ul>
        <li>
            <a className="item" href="#">
                Profile
            </a>
        </li>
        <li>
            <a className="item" href="#">
                Messages
            </a>
        </li>
        <li>
            <a className="item" href="#">
                News
            </a>
        </li>
        <li>
            <a className="item" href="#">
                Music
            </a>
        </li>
        <li>
            <a className="item" href="#">
                Settings
            </a>
        </li>
    </ul>
</nav>

}

export default Navbar;