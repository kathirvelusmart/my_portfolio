import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import HeaderLogo from '../../Components/HeaderLogo/HeaderLogo';
import { Button } from 'react-bootstrap';
import MenuList from './MenuList/MenuList';

export default function Header() {
    return (
        <div>
            <header className="header">
                <HeaderLogo />
                <MenuList />
                <NavLink end to={'/'}>
                    <Button className="commonButton">Log out</Button>
                </NavLink>
            </header>
        </div>
    )
}
