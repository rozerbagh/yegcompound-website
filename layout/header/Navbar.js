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
} from "reactstrap";
import logo from "../../assets/images/logos/logo-white.svg";
import { RiSearch2Fill } from "react-icons/ri";
import { useCookies } from "react-cookie";
const HeaderComponent = ({ mweb, mobileOS }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  const toggle = () => setIsOpen(!isOpen);
  const handleSearch = (e) => {
    const { name, value } = e.target;
    if (value.length >= 3) {
      // alert("Seraching... Coming Soon");
    }
  };

  return (
    <header id="header-section">
      <div className="header1 po-relative">
        <Navbar className="navbar-expand-lg h3-nav navbar fixed-top navbar-dark bg-primary">
          <Container fluid="xl" className="d-flex flex-column">
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="p-cursor m-r-10">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="yegcompunding.com"
                    className="logo-image"
                    // height={"80px"}
                    width={"150px"}
                  />
                </Link>
              </div>
              <NavbarToggler onClick={toggle}>
                <span className="ti-menu text-white"></span>
              </NavbarToggler>
              {/* <RiSearch2Fill /> */}
              <div
                className={`w-50 d-flex align-items-center bg-white searchbar`}
              >
                {mweb ? (
                  <RiSearch2Fill />
                ) : (
                  <Input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => handleSearch(e)}
                  />
                )}
              </div>
              {cookies.auth?.token ? null : (
                <div>
                  <Link href="/login">
                    <div className="btn btn-primary">Login</div>
                  </Link>
                </div>
              )}
              {cookies.auth?.token && (
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="text-white bg-transparent border-0"
                    onClick={() => setShowProfileMenu((ps) => !ps)}
                  >
                    <div className="d-flex align-items-center">
                      <i className="fa fa-user"></i>&nbsp;&nbsp;
                      <div>{cookies.auth?.userName}</div>{" "}
                      <i className="fa fa-angle-down m-l-5"></i>
                    </div>
                  </DropdownToggle>
                  {showProfileMenu && (
                    <DropdownMenu className="b-none animated fadeInUp">
                      <DropdownItem>
                        <NavItem className="text-white">
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
                  )}
                </UncontrolledDropdown>
              )}
            </div>
            <div className="w-100">
              <Collapse isOpen={isOpen} navbar id="header1">
                <Nav
                  navbar
                  className="text-white w-100 mb-3 mt-2 mt-lg-0 align-items-center d-flex justify-content-start"
                >
                  <NavItem className="active m-r-10">
                    <Link href="/">
                      <span className="text-white p-cursor">Home</span>
                    </Link>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav className="m-r-10">
                      <span className="text-white p-cursor">Services</span>
                      <i className="fa fa-angle-down m-l-5 text-white "></i>
                    </DropdownToggle>
                    <DropdownMenu className="b-none animated fadeInUp">
                      <DropdownItem header>
                        <NavItem>
                          <Link className="text-white" href="/prescriptions">
                            <span className="text-primary p-cursor">
                              Prescriptions
                            </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem header>
                        <NavItem>
                          <Link href="/vaccines">
                            <span className="text-primary p-cursor">
                              Vaccines
                            </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem header>
                        <NavItem>
                          <Link href="/assesments-monitoring">
                            <span className="text-primary p-cursor">
                              Assesments & Monitoring
                            </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem header>
                        <NavItem>
                          <Link href="/medicine-customization">
                            <span className="text-primary p-cursor">
                              Medication Customization
                            </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem header>
                        <NavItem>
                          <Link href="/wellness-consultation">
                            <span className="text-primary p-cursor">
                              {" "}
                              Wellness Consultation
                            </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <Link href="/contact">Referals</Link>
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
                          <Link href="/general-compounding">
                            <span className="text-primary p-cursor">
                              General Compounding
                            </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem header>
                        <NavItem>
                          <Link href="/hormone-replacement-therapy">
                            <span className="text-primary p-cursor">
                              Hormone Replacement Therapy (HRT)
                            </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem header>
                        <NavItem>
                          <Link href="/pain-management">
                            <span className="text-primary p-cursor">
                              Pain Management
                            </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem header>
                        <NavItem>
                          <Link href="/veterinary-compounding">
                            <span className="text-primary p-cursor">
                              Veterinary Compounding
                            </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <Link href="/contact">Referals</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  {cookies.auth?.token && (
                    <NavItem className="m-r-20">
                      <Link href="/orders">
                        <span className="text-white p-cursor">Orders</span>
                      </Link>
                    </NavItem>
                  )}
                  <NavItem className="m-r-20">
                    <Link href="/contact">
                      <span className="text-white p-cursor">Contact Us</span>
                    </Link>
                  </NavItem>{" "}
                </Nav>
              </Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default HeaderComponent;
