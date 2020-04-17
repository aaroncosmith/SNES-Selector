import React from 'react';
import styled from 'styled-components';

const Nav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: black;
`
const NavItem = styled.li`
    float: left;
`
const NavLink = styled.a `
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`
const SuperNavbar = () => {
        return (
            <Nav>
                <NavItem>
                    <NavLink href="localhost:3000/">SNES</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="localhost:3000/">Genesis</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="localhost:3000/">PC</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="localhost:3000/">PS4</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="localhost:3000/">Switch</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="localhost:3000/">Xbox One</NavLink>
                </NavItem>
            </Nav>
        )
}

export default SuperNavbar;