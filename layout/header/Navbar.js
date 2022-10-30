import React, { useState } from "react";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    NavbarBrand,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
} from "reactstrap";
import Image from "next/image";
import logo from "../../assets/images/logos/logo.png";
import logo2 from "../../assets/images/logos/white-logo.png";
const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div id="section">
            <div className="header1 po-relative">
                <Container>
                    <Navbar className="navbar-expand-lg h3-nav">
                        <NavbarBrand href="/">
                            <Image src={logo} alt="lemarchandi-dispensary" className="logo-image" />
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle}>
                            <span className="ti-menu"></span>
                        </NavbarToggler>
                        <Collapse isOpen={isOpen} navbar id="header1">
                            <Nav navbar className="ml-auto mt-2 mt-lg-0">
                                <NavItem className="active">
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/compounding">Compounding</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/services">Services</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        Options <i className="fa fa-angle-down m-l-5"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="b-none animated fadeInUp">
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem>Separated link</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>One more separated link</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink href="/orders">Orders</NavLink>
                                </NavItem>
                                <NavItem>
                                    <a className="btn btn-outline-info" href="/login">
                                        Login
                                    </a>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );
};

export default HeaderComponent;