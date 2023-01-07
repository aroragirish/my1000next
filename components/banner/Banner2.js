import React from "react";
import {Link} from "next";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/form-banners/banner1/hero-graphics.png";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2 bg-dark">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
            Invest in high returns secured debt assets
            </h1>
            <h4 className="subtitle font-light">
            Access vetted investment opportunities in hotels, solar energies, etc.
            </h4>
            <Link href="/get-started">
              <a
                className="btn btn-success text-dark m-r-20 btn-md m-t-30 font-weight-bold"
              >
                Get Started
              </a>
            </Link>
            <Link href="/#coming">
              <a className="btn btn-md m-t-30 font-weight-bold btn-outline-light ">
                Buy Business
              </a>
            </Link>
          </Col>
          <Col className="mt-5" lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
