import React from "react";
import { Row, Col, Container, Card } from "reactstrap";
import Image from "next/image";
import img1 from "../assets/images/portfolio/delhi2.jpg";
import img2 from "../assets/images/portfolio/gym.jpg";
import img3 from "../assets/images/blog/blog-home/img1.jpg";
import img4 from "../assets/images/portfolio/laptop.png";

import img5 from "../assets/images/portfolio/kyc.png";

const dashboard = () => {
    return (
        <div className="mt-5">
            <div className="blog-home2">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8" className="text-center">
                            <h2 className="title">Investment Opportunities</h2>
                            <h6 className="subtitle">
                                Here are some opportunities for you to invest and gain maximum output
                            </h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40 justify-content-center">
                        <Col lg="4" md="6">
                            <Card>
                                <a href="#">
                                    <Image
                                        className="card-img-top"
                                        src={img1}
                                        alt="wrappixel kit"
                                    />
                                </a>
                                <div className="date-pos bg-info-gradiant">
                                    upto<span>8%</span>
                                </div>
                                <h3 className="font-medium m-t-30">
                                    <a href="#" className="link">
                                        Delhi Darbar
                                    </a>
                                </h3>
                                <p style={{
                                    height: '75px'
                                }} className="m-t-20">
                                    <strong>Delhi Darbar</strong> is food chain serving more than 1lac customers
                                </p>
                                <hr />
                                <Row>
                                    <Col lg={4}>
                                        <div>
                                            <strong> 8% </strong>
                                        </div>
                                        <div className="text-muted" style={{
                                            fontSize: '14px'
                                        }}>
                                            pre-tax returns
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <strong> 8-10 </strong>
                                        </div>
                                        <div className="text-muted" style={{
                                            fontSize: '14px'
                                        }}>
                                            months tenure
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <strong>₹100000 </strong>
                                        </div>
                                        <div className="text-muted" style={{
                                            fontSize: '14px'
                                        }}>
                                            minimum investment
                                        </div>
                                    </Col>
                                </Row>
                                <a href="#" className="linking text-themecolor m-t-5">
                                    Learn More <i className="ti-arrow-right"></i>
                                </a>
                            </Card>
                        </Col>
                        <Col lg="4" md="6">
                            <Card>
                                <a href="#">
                                    <Image
                                        className="card-img-top"
                                        src={img2}
                                        alt="wrappixel kit"
                                    />
                                </a>
                                <div className="date-pos bg-info-gradiant">
                                    Upto<span>23%</span>
                                </div>
                                <h3 className="font-medium m-t-30">
                                    <a href="#" className="link">
                                        New Era Gym
                                    </a>
                                </h3>
                                <p style={{
                                    height: '75px'
                                }} className="m-t-20">
                                    <strong>New Era Gym</strong> is a new hightech gym coming to your area soon !
                                </p>
                                <hr />
                                <Row>
                                    <Col lg={4}>
                                        <div>
                                            <strong> 23% </strong>
                                        </div>
                                        <div className="text-muted" style={{
                                            fontSize: '14px'
                                        }}>
                                            pre-tax returns
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <strong> 8-10 </strong>
                                        </div>
                                        <div className="text-muted" style={{
                                            fontSize: '14px'
                                        }}>
                                            months tenure
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <strong>₹100000 </strong>
                                        </div>
                                        <div className="text-muted" style={{
                                            fontSize: '14px'
                                        }}>
                                            minimum investment
                                        </div>
                                    </Col>
                                </Row>
                                <a href="#" className="linking text-themecolor m-t-10">
                                    Learn More <i className="ti-arrow-right"></i>
                                </a>
                            </Card>
                        </Col>
                        <Col lg="4" md="6">
                            <Card>
                                <a href="#">
                                    <Image
                                        className="card-img-top"
                                        src={img3}
                                        alt="wrappixel kit"
                                    />
                                </a>
                                <div className="date-pos bg-info-gradiant">
                                    Upto<span>12%</span>
                                </div>
                                <h3 className="font-medium m-t-30">
                                    <a href="#" className="link">
                                        BTST IT Solutions
                                    </a>
                                </h3>
                                <p style={{
                                    height: '75px'
                                }} className="m-t-20">
                                    <strong>BTST IT Solutions</strong> is an IT tech founded in Dec 2012 and working in multiple domains such as Banking, Telecom, etc.
                                </p>
                                <hr />
                                <Row>
                                    <Col lg={4}>
                                        <div>
                                            <strong> 12% </strong>
                                        </div>
                                        <div className="text-muted" style={{
                                            fontSize: '14px'
                                        }}>
                                            pre-tax returns
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <strong> 1-2 </strong>
                                        </div>
                                        <div className="text-muted" style={{
                                            fontSize: '14px'
                                        }}>
                                            years tenure
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <strong>₹400000 </strong>
                                        </div>
                                        <div className="text-muted" style={{
                                            fontSize: '14px'
                                        }}>
                                            minimum investment
                                        </div>
                                    </Col>
                                </Row>
                                <a href="#" className="linking text-themecolor m-t-10">
                                    Learn More <i className="ti-arrow-right"></i>
                                </a>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div class="container mt-5 text-center">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card-shadow card card-body">
                            <div class="card-title">
                            <Image
                                        className="card-img-top"
                                        src={img4}
                                        alt="wrappixel kit"
                                    />
                            </div>
                            <h2 class="card-text">Schedule a call</h2>
                            <p className="text-muted">With your Relationship Manager to know more details about the opportunity and clear your doubts</p>
                            <a style={{
                                fontSize: '24px',
                                cursor: 'pointer',
                            }} className="text-primary">
                                Click Here
                            </a>
                            </div>
                        </div>
                        <div class="col-md-12">
                        <div class="card-shadow card card-body">
                            <div class="card-title">
                            <Image
                                        className="card-img-top"
                                        src={img5}
                                        alt="wrappixel kit"
                                    />
                            </div>
                            <h2 class="card-text">Share KYC Details</h2>
                            <p className="text-muted">It won't take more than 2 minutes</p>
                            <a style={{
                                fontSize: '24px',
                                cursor: 'pointer',
                            }} className="text-primary">
                                COMPLETE KYC
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default dashboard