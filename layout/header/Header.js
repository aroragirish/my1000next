import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
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
  ButtonGroup
} from "reactstrap";
import logo from "../../assets/images/logos/white-text.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutApi } from "../../services/authService";

const Header = () => {
  const dispatch = useDispatch();
  const {user, tokens} = useSelector(state => state.user);
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    logoutApi({refreshToken: tokens.refresh.token}).then((res) => {
      dispatch({
        type: 'LOGOUT'
      });
      router.push('/');
    })
  }
  return (
    <div className="topbar fixed-top bg-dark" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg  h6-nav-bar">
            <NavbarBrand href="/">
              <Image height={70} width={125} src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto"
              id="h6-info"
            >
              <Nav navbar className="ml-auto ">
                {
                  user && <NavItem className="font-weight-bold">
                  <Link href="/dashboard">
                    <a
                      className={
                        router.pathname == "/dashboard"
                          ? "text-success nav-link"
                          : "nav-link"
                      }
                    >
                      Dashboard
                    </a>
                  </Link>
                </NavItem>
                }
                <NavItem className="font-weight-bold">
                  <Link href="/about">
                    <a
                      className={
                        router.pathname == "/about"
                          ? "text-success nav-link"
                          : "nav-link"
                      }
                    >
                      About
                    </a>
                  </Link>
                </NavItem>
                <NavItem className="font-weight-bold">
                  <Link href="/product">
                    <a
                      className={
                        router.pathname == "/product"
                          ? "text-success nav-link"
                          : "nav-link"
                      }
                    >
                      Product
                    </a>
                  </Link>
                </NavItem>
                <NavItem className="font-weight-bold">
                  <Link href="/how-it-works">
                    <a
                      className={
                        router.pathname == "/how-it-works"
                          ? "text-success nav-link"
                          : "nav-link"
                      }
                    >
                      How it works
                    </a>
                  </Link>
                </NavItem>
              </Nav>
              {user ? <ButtonGroup>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="button" className="btn btn-success text-dark font-weight-bold" caret>
                  {user.name}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" onClick={logout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ButtonGroup> : <div className="act-buttons font-weight-bold">
                <Link
                  href="/get-started"
                  passHref
                  >
                <NavLink
                  className="btn btn-success text-dark font-weight-bold"
                >
                  Login/Register
                </NavLink>
                </Link>
              </div>}
              

            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
