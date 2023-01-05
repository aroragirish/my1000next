/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../assets/images/staticslider/slider/hero-banner.png";
const BannerComponent = () => {
  return (
    <div>
      <div className="static-slider10 bg-dark">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
              <span className="label label-rounded label-inverse">
                Creating Brands
              </span>
              <h1 className="title">ONE BILLON People Use Facebook</h1>
              <h6 className="subtitle op-8">
                Pellentesque vehicula eros a dui pretium ornare. Phasellus
                congue vel quam nec luctus.In accumsan at eros in dignissim.
                Cras sodales nisi nonn accumsan.
              </h6>
              <a
                className="btn btn-light btn-rounded btn-md m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>Start Now</span>
              </a>
            </Col>
            <Col md="6" className="text-center">
              <Image width={350} height={500} src={herobanner} alt="herobanner"></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
