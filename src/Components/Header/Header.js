import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import HeaderLogo from '../../Components/HeaderLogo/HeaderLogo';
import { menuList } from '../../constants/constant';
import { activeMenuStyle } from '../../constants/constant';


export default function Header() {
    return (
        <div>
            <header className="header">
                <HeaderLogo />
                <ul className="menu">
                    {menuList.map((menu, index) =>
                    (
                        <li>
                            <NavLink key={index} end to={menu.navigateTo} style={({ isActive }) => isActive ? activeMenuStyle : undefined}>
                                {menu.menuName}
                            </NavLink>
                        </li>
                    )
                    )}
                </ul>
            </header>
        </div>
    )
}
