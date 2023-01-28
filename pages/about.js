import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const About = () => {
    return (
        <>
            <div className="static-slider-head banner2 bg-dark text-center mt-5 pt-5">
                <Container>
                    <Row className=" d-flex align-items-center justify-content-center p-5">
                        <Col lg="12" md="12" className="align-self-center">
                            <h2 className="subtitle font-muted">About Us</h2>
                            <h3 className="title mb-5">
                                Helping SME To Digitalized
                                And User Friendly Solutions.            </h3>
                            <h4 className="subtitle font-muted text-start">

                                The MY1000+ platform connects investors to profitable opportunities: Businesses often struggle to raise funds through traditional channels, but MY1000+'s innovative model provides investors with the opportunity to earn solid returns while helping businesses grow.
                                <br /> <br />
                                Opportunities for investors & businesses to connect and work together: We're bringing the power of crowdfunding finance and angel investing to you; Total transparency, Starts with minimum investment , & quick ROI - for everyone!
                                <br /><br />
                                Create the company of your dreams with MY1000+ .: Our platform provides opportunities for investors and businesses to connect and work together. Businesses can register on the platform to raise funds, while investors can use the platform to find businesses to invest in.
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default About