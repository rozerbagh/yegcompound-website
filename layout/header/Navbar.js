import React, { useState } from "react";
import Link from "next/link";
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
    NavbarToggler,
    Collapse,
} from "reactstrap";
import Image from "next/image";
import logo from "../../assets/images/logos/logo.png";
import logo2 from "../../assets/images/logos/white-logo.png";
import { useCookies } from "react-cookie";
const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div id="section">
            <div className="header1 po-relative">
                <Container>
                    <Navbar className="navbar-expand-lg h3-nav">
                        <NavbarBrand href="/">
                            <Image
                                src={logo}
                                alt="lemarchandi-dispensary"
                                className="logo-image"
                                height={60}
                                width={100}
                            />
                            {/* yegcompounding */}
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle}>
                            <span className="ti-menu"></span>
                        </NavbarToggler>
                        <Collapse isOpen={isOpen} navbar id="header1">
                            <Nav navbar className="ml-auto mt-2 mt-lg-0 align-items-center">
                                <NavItem className="active">
                                    <Link href="/">Home</Link>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        Services <i className="fa fa-angle-down m-l-5"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="b-none animated fadeInUp">
                                        <DropdownItem>
                                            <NavItem>
                                                <Link href="/compounding">Compounding</Link>
                                            </NavItem>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavItem>
                                                <Link href="/services">Services</Link>
                                            </NavItem>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Referals</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                {cookies.auth?.token && (
                                    <NavItem>
                                        <Link href="/orders">Orders</Link>
                                    </NavItem>
                                )}
                                {cookies.auth?.token ? null : (
                                    <NavItem>
                                        <Link href="/login">
                                            <div className="btn btn-outline-info">Login</div>
                                        </Link>
                                    </NavItem>
                                )}
                                {cookies.auth?.token && (
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav>
                                            <i className="fa fa-user"></i>&nbsp;&nbsp;
                                            <span>{cookies.auth?.userName}</span>{" "}
                                            <i className="fa fa-angle-down m-l-5"></i>
                                        </DropdownToggle>
                                        <DropdownMenu className="b-none animated fadeInUp">
                                            <DropdownItem>
                                                <NavItem>
                                                    <Link href="/profile">Profile</Link>
                                                </NavItem>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavItem>
                                                    <Link href="/profile">Settings</Link>
                                                </NavItem>
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem onClick={() => {
                                                localStorage.clear();
                                                removeCookie("auth");
                                                window.location.href = "/"
                                            }}>Logout</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                )}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );
};

export default HeaderComponent;
