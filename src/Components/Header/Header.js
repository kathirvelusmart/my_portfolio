import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css';
import HeaderLogo from '../../Components/HeaderLogo/HeaderLogo';
import { Button } from 'react-bootstrap';
import MenuList from './MenuList/MenuList';

export default function Header() {
    const location = useLocation()
    return (
        <div>
            <header className="header">
                <HeaderLogo />
                {
                    (location.pathname !== '/') &&
                    <React.Fragment>
                        <MenuList />
                        <NavLink end to={'/'}>
                            <Button className="commonButton">Log out</Button>
                        </NavLink>
                    </React.Fragment>
                }
            </header>
        </div>
    )
}
