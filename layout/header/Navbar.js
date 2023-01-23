/* eslint-disable @next/next/link-passhref */
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
  Input,
} from "reactstrap";
import Image from "next/image";
import logo from "../../assets/images/logos/logo-white.svg";
import logo2 from "../../assets/images/logos/white-logo.png";
import { useCookies } from "react-cookie";
const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  const toggle = () => setIsOpen(!isOpen);
  const handleSearch = (e) => {
    const { name, value } = e.target;
    if (value.length >= 3) {
      // alert("Seraching... Coming Soon");
    }
  };
  return (
    <div id="section" className="bg-primary">
      <div className="header1 po-relative">
        <Container fluid="xl">
          <Navbar className="navbar-expand-lg h3-nav">
            <div className="w-100">
              <NavbarBrand href="/">
                <Image
                  src={logo}
                  alt="yegcompunding.com"
                  className="logo-image"
                  height={"60px"}
                  width={"200px"}
                />
              </NavbarBrand>
            </div>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <div className="w-100 d-flex align-items-center bg-white searchbar">
              <Input
                type="text"
                placeholder="Search..."
                onChange={(e) => handleSearch(e)}
              />
            </div>
            {cookies.auth?.token ? null : (
              <div>
                <Link href="/login">
                  <div className="btn btn-primary">Login</div>
                </Link>
              </div>
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
                  <DropdownItem
                    onClick={() => {
                      localStorage.clear();
                      removeCookie("auth");
                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Navbar>
          <Navbar className="navbar-expand-lg h3-nav">
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav
                navbar
                className="text-white w-100 mb-3 mt-2 mt-lg-0 align-items-center d-flex justify-content-between"
              >
                <NavItem className="active">
                  <Link href="/">
                    <span className="text-white p-cursor">Home</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="text-white" href="/prescriptions">
                    <span className="text-white p-cursor">Prescriptions</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/vaccines">
                    <span className="text-white p-cursor">Vaccines</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/assesments-monitoring">
                    <span className="text-white p-cursor">
                      Assesments & Monitoring
                    </span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/medicine-customization">
                    <span className="text-white p-cursor">
                      Medication Customization
                    </span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/wellness-consultation">
                    <span className="text-white p-cursor">
                      {" "}
                      Wellness Consultation
                    </span>
                  </Link>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Services <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem header>
                      <NavItem>
                        <Link href="/prescriptions">Prescriptions</Link>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem header>
                      <NavItem>
                        <Link href="/vaccines">Vaccines</Link>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem header>
                      <NavItem>
                        <Link href="/assesments-monitoring">
                          Assesments & Monitoring
                        </Link>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem header>
                      <NavItem>
                        <Link href="/medicine-customization">
                          Medication Customization
                        </Link>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem header>
                      <NavItem>
                        <Link href="/wellness-consultation">
                          Wellness Consultation
                        </Link>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Referals</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
                {cookies.auth?.token && (
                  <NavItem>
                    <Link href="/orders">
                      <span className="text-white p-cursor">Orders</span>
                    </Link>
                  </NavItem>
                )}
                <NavItem>
                  <Link href="/contact">
                    <span className="text-white p-cursor">Contact Us</span>
                  </Link>
                </NavItem>{" "}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default HeaderComponent;
