import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import HeaderLogo from '../../Components/HeaderLogo/HeaderLogo';
import { menuList } from '../../constants/constant';
import { activeMenuStyle } from '../../constants/constant';
import { Button } from 'react-bootstrap';

let isSignUpPage = false;
const navigateToSignUp = () => {
    isSignUpPage = !isSignUpPage;
}

export default function Header() {
    return (
        <div>
            <header className="header">
                <HeaderLogo />
                <ul className="menu" style={{ marginLeft: '20%' }}>
                    {menuList.map((menu, index) =>
                    (
                        <li key={index}>
                            <NavLink end to={menu.navigateTo} style={({ isActive }) => isActive ? activeMenuStyle : undefined}>
                                {menu.menuName}
                            </NavLink>
                        </li>
                    )
                    )}
                </ul>
                <NavLink end to={'signup'}>
                    <Button onClick={navigateToSignUp} className="signupBtn">Sign up</Button>
                </NavLink>
            </header>
        </div>
    )
}
