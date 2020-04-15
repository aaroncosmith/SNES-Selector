import React from 'react';
import { Navbar } from 'bloomer/lib/components/Navbar/Navbar';
import { NavbarBrand } from 'bloomer/lib/components/Navbar/NavbarBrand';
import { NavbarItem } from 'bloomer/lib/components/Navbar/NavbarItem';
import { NavbarMenu } from 'bloomer/lib/components/Navbar/NavbarMenu';
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd';
import { NavbarStart } from 'bloomer/lib/components/Navbar/NavbarStart';

const SuperNavbar = () => {
        return (
            <div className="Navbar">
                <Navbar style={{ margin: '0'}}>
                    <NavbarBrand>
                        <NavbarItem>
                            <h3>SNES Selector</h3>
                        </NavbarItem>
                    </NavbarBrand>
                    <NavbarMenu>
                    <NavbarStart>                       
                    </NavbarStart>
                    
                        <NavbarEnd>
                            <NavbarItem href="#">Games</NavbarItem>
                            <NavbarItem href="#">Tech</NavbarItem>
                            <NavbarItem href="#">Test</NavbarItem>
                        </NavbarEnd>
                    </NavbarMenu>
                </Navbar>
            </div>
        )
}

export default SuperNavbar;