import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
} from "reactstrap";
import logo from "../../assets/images/logos/white-text.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
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
                <NavItem className="font-weight-bold">
                  <Link href="/blog">
                    <a
                      className={
                        router.pathname == "/blog"
                          ? "text-success nav-link"
                          : "nav-link"
                      }
                    >
                      Blog
                    </a>
                  </Link>
                </NavItem>
              </Nav>
              <div className="act-buttons font-weight-bold">
                <Link
                  href="/get-started"
                  passHref
                  >
                <NavLink
                  className="btn btn-info font-weight-bold"
                >
                  Login/Register
                </NavLink>
                </Link>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
