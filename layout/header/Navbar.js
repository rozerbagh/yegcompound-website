/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Dropdown,
} from "reactstrap";
import { RiSearch2Fill } from "react-icons/ri";
import { useCookies } from "react-cookie";
import Logo from "../../assets/svgs/Logo";
const HeaderComponent = ({ mweb, mobileOS }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  const toggle = () => setIsOpen(!isOpen);
  const handleSearch = (e) => {
    const { name, value } = e.target;
    if (value.length >= 3) {
      alert("Searching... Coming Soon");
    }
  };

  return (
    <header id="header-section">
      <div className="header1 po-relative">
        <Navbar className="navbar-expand-lg h3-nav navbar fixed-top navbar-dark bg-primary">
          <Container fluid="xl" className="flex flex-column">
            <div className="w-100 yegc-navbar">
              <div className="navbar--logo p-cursor m-r-10">
                <Link legacyBehavior href="/">
                  <Logo />
                </Link>
              </div>

              <Collapse isOpen={isOpen} navbar id="header1">
                <div className="mobile-nav-menu mt-md-4">
                  <Nav
                    navbar
                    className="text-white w-100 mb-3 mt-4 mt-lg-0 align-items-left flex"
                  >
                    <NavItem className="active m-r-10">
                      <Link legacyBehavior href="/">
                        <span className="text-white p-cursor">Home</span>
                      </Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav className="m-r-10">
                        <span className="text-white p-cursor">Services</span>
                        <i className="fa fa-angle-down m-l-5 text-white"></i>
                      </DropdownToggle>
                      <DropdownMenu className="b-none animated fadeInUp">
                        <DropdownItem header>
                          <NavItem>
                            <Link
                              legacyBehavior
                              className="text-white"
                              href="/prescriptions"
                            >
                              <span className="text-primary p-cursor">
                                Prescriptions
                              </span>
                            </Link>
                          </NavItem>
                        </DropdownItem>
                        <DropdownItem header>
                          <NavItem>
                            <Link legacyBehavior href="/vaccines">
                              <span className="text-primary p-cursor">
                                Vaccines
                              </span>
                            </Link>
                          </NavItem>
                        </DropdownItem>
                        <DropdownItem header>
                          <NavItem>
                            <Link legacyBehavior href="/assesments-monitoring">
                              <span className="text-primary p-cursor">
                                Assesments & Monitoring
                              </span>
                            </Link>
                          </NavItem>
                        </DropdownItem>
                        <DropdownItem header>
                          <NavItem>
                            <Link legacyBehavior href="/medicine-customization">
                              <span className="text-primary p-cursor">
                                Medication Customization
                              </span>
                            </Link>
                          </NavItem>
                        </DropdownItem>
                        <DropdownItem header>
                          <NavItem>
                            <Link legacyBehavior href="/wellness-consultation">
                              <span className="text-primary p-cursor">
                                {" "}
                                Wellness Consultation
                              </span>
                            </Link>
                          </NavItem>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <Link legacyBehavior href="/contact">
                            Referals
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav className="m-r-10">
                        <span className="text-white p-cursor">Compounding</span>
                        <i className="fa fa-angle-down m-l-5 text-white "></i>
                      </DropdownToggle>
                      <DropdownMenu className="b-none animated fadeInUp">
                        <DropdownItem header>
                          <NavItem>
                            <Link legacyBehavior href="/general-compounding">
                              <span className="text-primary p-cursor">
                                General Compounding
                              </span>
                            </Link>
                          </NavItem>
                        </DropdownItem>
                        <DropdownItem header>
                          <NavItem>
                            <Link
                              legacyBehavior
                              href="/hormone-replacement-therapy"
                            >
                              <span className="text-primary p-cursor">
                                Hormone Replacement Therapy (HRT)
                              </span>
                            </Link>
                          </NavItem>
                        </DropdownItem>
                        <DropdownItem header>
                          <NavItem>
                            <Link legacyBehavior href="/pain-management">
                              <span className="text-primary p-cursor">
                                Pain Management
                              </span>
                            </Link>
                          </NavItem>
                        </DropdownItem>
                        <DropdownItem header>
                          <NavItem>
                            <Link legacyBehavior href="/veterinary-compounding">
                              <span className="text-primary p-cursor">
                                Veterinary Compounding
                              </span>
                            </Link>
                          </NavItem>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <Link legacyBehavior href="/contact">
                            Referals
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    {cookies.auth?.token && (
                      <NavItem className="m-r-20">
                        <Link legacyBehavior href="/orders">
                          <span className="text-white p-cursor">Orders</span>
                        </Link>
                      </NavItem>
                    )}
                    <NavItem className="m-r-20">
                      <Link legacyBehavior href="/contact">
                        <span className="text-white p-cursor">Contact Us</span>
                      </Link>
                    </NavItem>{" "}
                  </Nav>
                </div>
              </Collapse>

              {/* <div
                className={`w-50 flex align-items-center bg-white searchbar`}
              >
                {mweb ? (
                  <div className="pl-1 p-cursor">
                    <RiSearch2Fill />
                  </div>
                ) : (
                  <Input
                    type="text"
                    placeholder="Search... Coming soon"
                    onChange={(e) => handleSearch(e)}
                  />
                )}
              </div> */}
              {cookies.auth?.token ? null : (
                <Link legacyBehavior href="/login">
                  <div className="btn btn-primary">Login</div>
                </Link>
              )}
              {cookies.auth?.token && (
                <>
                  <Dropdown
                    isOpen={showProfileMenu}
                    toggle={() => setShowProfileMenu((ps) => !ps)}
                  >
                    <DropdownToggle className="text-white bg-transparent border-0">
                      <div className="yegc-navbar-btn">
                        <i className="fa fa-user"></i>&nbsp;&nbsp;
                        <div>{cookies.auth?.userName}</div>{" "}
                        <i className="fa fa-angle-down m-l-5"></i>
                      </div>
                    </DropdownToggle>
                    {showProfileMenu && (
                      <DropdownMenu className="b-none animated fadeInUp">
                        <DropdownItem>
                          <NavItem className="text-white">
                            <Link legacyBehavior href="/profile">
                              Profile
                            </Link>
                          </NavItem>
                        </DropdownItem>
                        <DropdownItem>
                          <NavItem>
                            <Link legacyBehavior href="/profile">
                              Settings
                            </Link>
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
                    )}
                  </Dropdown>
                </>
              )}
              <NavbarToggler onClick={toggle}>
                <span className="ti-menu text-white"></span>
              </NavbarToggler>
            </div>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default HeaderComponent;
