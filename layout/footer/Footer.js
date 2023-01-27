/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer bg-light">
      <Container>
        <Row className="text-dark">
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="text-dark m-b-20 semi-bold">Address</h5>
            <p>Office No. 327, Hirabaug Business Center, Swargate, Pune. 411002</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="text-dark m-b-20">Email</h5>
            <p>
              <Link href="#">
                <a className="link text-dark">Email: info@mytt.in</a>
              </Link>
              <br />
              <Link href="https://my1000.biz/">
                <a className="link text-dark">Site: my1000.biz</a>
              </Link>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="text-dark m-b-20">Social</h5>
            <div className="round-social light">
              <Link href="https://www.facebook.com/myttindia">
                <a className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
              <Link href="https://www.instagram.com/mytt_india/">
                <a className="link">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/company/myttgroup">
                <a className="link">
                  <i className="fa fa-linkedin"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright text-dark">
                  All Rights Reserved by{" "}
                  <Link href="https://my1000.biz/">
                    <a className="link text-dark">my1000.biz</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  {/* <Link href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Legal Disclaimer</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Privacy Policy</a>
                  </Link> */}
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
