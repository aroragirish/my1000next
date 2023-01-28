/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import landing from "../../../assets/growth-analysis.gif";
import Link from "next/link";

const PortfolioComponent = () => {
  return (
    <div>
      <div className="static-slider-head banner2 bg-dark ">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
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
                 <strong> Get Started</strong>
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
