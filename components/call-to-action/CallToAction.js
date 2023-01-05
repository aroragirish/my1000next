import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const CallToAction = () => {
  return (
    <div className="coming-soon" id="coming">
      <Container className="py-5 mt-5">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div>
                <h2 className="title text-white font-weight-bold">
                  Sign up to start earning now!
                </h2>
                <h6 className="subtitle font-light text-white">
                We connect our customers with the best, and help them keep up-and stay open.
                </h6>
                <Button
                  href="/get-started"
                  className="btn btn-dark m-r-20 btn-md m-t-30"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
