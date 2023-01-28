/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/portfolio/img1.jpg";
import img2 from "../../../assets/images/portfolio/img2.jpg";
import img3 from "../../../assets/images/portfolio/img3.jpg";
import img4 from "../../../assets/images/portfolio/img4.jpg";
import img5 from "../../../assets/images/portfolio/img5.jpg";
import img6 from "../../../assets/images/portfolio/img6.jpg";
import landing from "../../../assets/growth-analysis.gif";
import Link from "next/link";

const PortfolioComponent = () => {
  return (
    <div>
      <div className="static-slider-head banner2 bg-dark ">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
              <span className="label label-rounded label-inverse">
                Creating Brands
              </span>
              <h1 className="title">Grow your wealth with higher returns</h1>
              <h6 className="subtitle op-8">
                Your platform for exclusive investment opportunities
              </h6>
              <Link
                className="btn btn-light btn-rounded btn-md m-t-20"
                data-toggle="collapse"
                href="/get-started"
              >
                <span className="btn btn-info mt-3 text-light">
                  Get Started
                </span>
              </Link>
            </Col>
            <Col md="6" className="text-center">
              <Image
                src={landing}
                alt=""
                title=""
                width="100%"
                height="75%"
                layout="responsive"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponent;
