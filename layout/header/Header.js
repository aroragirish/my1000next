import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup,
} from "reactstrap";
import logo from "../../assets/images/team/white-text.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutApi } from "../../services/authService";

const Header = () => {
  const dispatch = useDispatch();
  const { user, tokens } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  }, [router.asPath])
  const logout = () => {
    logoutApi({ refreshToken: tokens.refresh.token }).then((res) => {
      dispatch({
        type: "LOGOUT",
      });
      router.push("/");
    });
  };
  return (
    <div className="topbar fixed-top bg-light" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg  h6-nav-bar">
            <NavbarBrand href="/">
              <Image height={70} width={125} src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-info"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto  justify-content-end"
              id="h6-info"
            >
              <Nav navbar className="ml-auto">
                {user && (
                  <NavItem className="font-weight-bold">
                    <Link href="/dashboard">
                      <a
                        className={
                          router.pathname == "/dashboard"
                            ? "text-info nav-link"
                            : "nav-link text-dark"
                        }
                      >
                        Dashboard
                      </a>
                    </Link>
                  </NavItem>
                )}

                <NavItem className="font-weight-bold">
                  <Link href="/product">
                    <a
                      className={
                        router.pathname == "/product"
                          ? "text-info nav-link"
                          : "nav-link text-dark"
                      }
                    >
                      Businesses
                    </a>
                  </Link>
                </NavItem>

                <NavItem className="font-weight-bold">
                  <Link href="/about">
                    <a
                      className={
                        router.pathname == "/about"
                          ? "text-info nav-link"
                          : "nav-link text-dark"
                      }
                    >
                      About Us
                    </a>
                  </Link>
                </NavItem>
                
                {user?.role === 'investor' && (
                  <NavItem className="font-weight-bold">
                  <Link href="/portfolio">
                    <a
                      className={
                        router.pathname == "/portfolio"
                          ? "text-info nav-link"
                          : "nav-link text-dark"
                      }
                    >
                      Portfolio
                    </a>
                  </Link>
                </NavItem>
                )} 

              </Nav>
              {user ? (
                <ButtonGroup>
                  <UncontrolledDropdown setActiveFromChild>
                    <DropdownToggle
                      tag="button"
                      className="btn btn-info text-light"
                      caret
                    >
                      <strong> {user.name}</strong>
                    </DropdownToggle>
                    <DropdownMenu>
                      {user?.role === "investor" && (
                        <DropdownItem>
                          <Link href="/my-orders" passHref>
                            <a className="text-black"> My Orders</a>
                          </Link>
                        </DropdownItem>
                      )}

                      {user?.role !== "investor" && (
                        <DropdownItem>
                          <Link href="/add-business" passHref>
                            <a className="text-black"> Add Business</a>
                          </Link>
                        </DropdownItem>
                      )}
                      {user?.role !== "investor" && (
                        <DropdownItem>
                          <Link href="/your-businesses" passHref>
                            <a className="text-black">
                              {user?.role === "admin"
                                ? "All Businesses"
                                : "Your Businesses"}
                            </a>
                          </Link>
                        </DropdownItem>
                      )}
                      {user?.role === "investor" && (
                        <DropdownItem>
                          <Link href="/add-bank" passHref>
                            <a className="text-black">
                              Update Bank Details
                            </a>
                          </Link>
                        </DropdownItem>
                      )}    
                      
                      <DropdownItem tag="a" onClick={logout}>
                      <span className="text-danger"> Logout </span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ButtonGroup>
              ) : (
                <div className="act-buttons font-weight-bold">
                  <Link href="/get-started" passHref>
                    <NavLink className="btn btn-info font-weight-bold">
                      <strong> Login/Register </strong>
                    </NavLink>
                  </Link>
                </div>
              )}
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
