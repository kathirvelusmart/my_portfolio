import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import HeaderLogo from '../../Components/HeaderLogo/HeaderLogo';

let activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '20px'
}

export default function Header() {
    return (
        <div>
            <header className="header">
                <HeaderLogo />
                <ul className="menu">
                    <li>
                        <NavLink
                            end
                            to='/'
                            style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="education"
                            style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Education
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="experience"
                            style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="projects"
                            style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="openSource"
                            style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Open source
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="contact"
                            style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Contact me
                        </NavLink>
                    </li>
                </ul>
            </header>
        </div>
    )
}
