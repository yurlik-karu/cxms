import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div>
            <Navbar color="dark" className="navbar-dark navbar-expand-sm">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>;
    }
}
