/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer bg-light">
      <Container>
        <Row className="text-dark">
          <Col lg="4" md="6" className="m-b-30">
            <h5 className="text-dark m-b-20 semi-bold">Address</h5>
            <p>Office No. 327, Hirabaug Business Center, Swargate, Pune. 411002</p>
          </Col>
          <Col lg="4" md="6" className="m-b-30">
          <h5 className="text-dark m-b-20 m semi-bold">About</h5>
          Easy, Effective, and Accessible Investment Opportunities: We're a team that is passionate about creating opportunity for investors. By levelling the playing field, we're removing obstacles and making it easier for everyone to invest with confidence.

          </Col>
          <Col lg="4" md="6" >
            <h5 className="text-dark m-b-20">Social</h5>
            <div className="round-social light">
              <Link href="https://www.facebook.com/MY1000PLUS">
                <a className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
              <Link href="https://www.instagram.com/my1000_in/">
              <div className="d-inline round-social insta">
                <a className="link">
                  <i className="fa fa-instagram"></i>
                </a>                
              </div>
              </Link>
              <Link href="https://www.linkedin.com/company/myttgroup">
                <a className="link">
                  <i className="fa fa-linkedin"></i>
                </a>
              </Link>
              <Link href="mailto:info@mytt.in">
              <div className="d-inline round-social mail">
                <a className="link">
                  <i className="fa fa-envelope"></i>
                </a>
                </div>
              </Link>
            </div>
          </Col>
          
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className=" font-14">
                <div className="m-t-10 m-b-10 copyright text-dark">
                  All Rights Reserved by{" "}
                  <Link href="https://my1000.biz/">
                    <a className="link text-info">my1000.biz</a>
                  </Link>
                </div>
                <div className="m-t-10 m-b-10 copyright text-dark">
                  Powered By{" "}
                  <Link href="https://mytt.in/">
                    <a className="link text-info">MYTT</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
