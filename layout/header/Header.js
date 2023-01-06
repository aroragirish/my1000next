import React, { useState } from "react";
import Image from "next/image";
import Link from "next/Link";
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

const Header = () => {
  const dispatch = useDispatch();
  const {user, tokens} = useSelector(state => state.user);
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    axios.post('http://localhost:3001/v1/auth/logout', {refreshToken: tokens.token}).then((res) => {
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
              <Image height={50} width={125} src={logo} alt="wrapkit" />
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
                <NavItem className="font-weight-bold">
                  <Link href="/">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-success nav-link"
                          : "nav-link"
                      }
                    >
                      Home
                    </a>
                  </Link>
                </NavItem>
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
