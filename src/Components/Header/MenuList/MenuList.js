import React from 'react';
import { menuList } from '../../../constants/constant';
import { activeMenuStyle } from '../../../constants/constant';
import { NavLink } from 'react-router-dom';

function MenuList() {
    return (
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
    )
}

export default MenuList