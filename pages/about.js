import React from "react";
import Image from "next/Image";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import img1 from "../assets/images/ui/img6.jpg";
import img2 from "../assets/images/ui/5.jpg";
import img3 from "../assets/images/ui/img5.jpg";
import TeamComponent from "../components/custom/sections/teamcomponent";

import CustomComponents from "../components/custom/Custom-components";
import FormBannerComponent from "../components/custom/sections/formbannercomponent";
const About = () => {
    return (
        <>
            <div className="static-slider-head banner2 bg-dark text-center">
                <Container>
                    <Row className=" d-flex align-items-center justify-content-center">
                        <Col lg="6" md="6" className="align-self-center">
                            <h4 className="subtitle font-light">About</h4>
                            <h1 className="title mb-5">
                                We love to make great things, things that matter.            </h1>
                            <h4 className="subtitle font-light">
                                Funding h andshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.            </h4>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="container pt-5 top150">
                <Row>
                    <Col lg="4" className="m-b-30">

                        <Image
                            src={img1}
                            alt="img"
                            className="img-responsive img-rounded"
                        />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4" className="text-center m-b-30">

                        <Image src={img2} alt="img" className="img-circle" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4">

                        <Image
                            src={img3}
                            alt="img"
                            className="img-responsive img-thumbnail"
                        />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" className="m-b-30">

                        <Image
                            src={img1}
                            alt="img"
                            className="img-responsive img-rounded"
                        />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4" className="text-center m-b-30">

                        <Image src={img2} alt="img" className="img-circle" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4">

                        <Image
                            src={img3}
                            alt="img"
                            className="img-responsive img-thumbnail"
                        />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                </Row>
            </div>
            <div className="spacer feature4">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            {/* <span className="label label-danger label-rounded">
                Feature 1
              </span> */}
                            <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
                            <h6 className="subtitle">
                                You can relay on our amazing features list and also our customer
                                services will be great experience for you without doubt and in
                                no-time
                            </h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col md="6" className="wrap-feature4-box">
                            <Card>
                                <CardBody>
                                    <div className="icon-round bg-light-info">
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <h5 className="font-medium">Instant Solutions</h5>
                                    <p className="m-t-20">
                                        You can relay on our amazing features list and also our
                                        customer services will be great experience. Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Praesent
                                        tristique pellentesque ipsum.
                                    </p>
                                    <a href="#" className="linking text-themecolor">
                                        Explore More<i className="ti-arrow-right"></i>
                                    </a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" className="wrap-feature4-box">
                            <Card>
                                <CardBody>
                                    <div className="icon-round bg-light-info">
                                        <i className="fa fa-check-circle"></i>
                                    </div>
                                    <h5 className="font-medium">Powerful Techniques </h5>
                                    <p className="m-t-20">
                                        You can relay on our amazing features list and also our
                                        customer services will be great experience. Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Praesent
                                        tristique pellentesque ipsum.{" "}
                                    </p>
                                    <a className="linking text-themecolor" href="#">
                                        Explore More <i className="ti-arrow-right"></i>
                                    </a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <section className="bg-dark pt-5 pb-5">
                <div className="container">
                    <p className="text-center text-light">Our numbers</p>
                    <h1 className="text-center text-white w-lg-75 mx-auto fs-xl-6 fs-lg-4 fs-3">Handshake infographic mass market crowdfunding iteration.</h1>
                    <div className="row mt-5">
                        <div className="col-md-4 col-sm-6 text-center text-sm-start">
                            <h1 className="text-success fs-5 fs-md-6 fs-lg-7 fs-xl-9 display-2">120M</h1>
                            <p className="text-light fs-2">Cool feature title</p>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center text-sm-start">
                            <h1 className="text-success fs-5 fs-md-6 fs-lg-7 fs-xl-9 display-2">10.000</h1>
                            <p className="text-light fs-2">Cool feature title</p>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center text-sm-start">
                            <h1 className="text-success fs-5 fs-md-6 fs-lg-7 fs-xl-9 display-2">240</h1>
                            <p className="text-light fs-2">Cool feature title</p>
                        </div>
                    </div>
                </div>

            </section>
            <TeamComponent />
            <section className="bg-dark pt-5 pb-5">
                <div className="container">
                    <div className="px-xl-8 px-md-5 px-3">
                        <p className="text-light fs-1">Our values</p>
                        <h1 className="text-white fs-lg-6 fs-md-4 fs-3 my-lg-4 my-3">Things in we believe</h1>
                        <p className="text-light w-lg-75 fs-1">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.</p>
                        <div className="row mt-5">
                            <div className="col-md-3"><img className="img-fluid" src="https://my1000.biz/my1000/public/assets/img/values/1.png" alt="" /></div>
                            <div className="col-md-9 mt-2 mb-md-0">
                                <h1 className="text-white fs-2 fs-lg-3 my-2">We are commited.</h1>
                                <p className="text-light fs-1">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-3"><img className="img-fluid" src="https://my1000.biz/my1000/public/assets/img/values/2.png" alt="" /></div>
                            <div className="col-md-9 mt-2 mb-md-0">
                                <h1 className="text-white fs-2 fs-lg-3 my-2">We are responsible.</h1>
                                <p className="text-light fs-1">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-3"><img className="img-fluid" src="https://my1000.biz/my1000/public/assets/img/values/3.png" alt="" /></div>
                            <div className="col-md-9 mt-2 mb-md-0">
                                <h1 className="text-white fs-2 fs-lg-3 my-2">We aim for progress.</h1>
                                <p className="text-light fs-1">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <FormBannerComponent />
        </>
    )
}

export default About