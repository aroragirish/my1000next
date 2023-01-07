import React from "react";
import Image from "next/image";
import { Container, Row, Col, Card, CardBody, Form } from "reactstrap";
import img1 from "../assets/images/ui/img6.jpg";
import img2 from "../assets/images/ui/5.jpg";
import img3 from "../assets/images/ui/img5.jpg";
import TeamComponent from "../components/custom/sections/teamcomponent";
import PortfolioComponent from "../components/custom/sections/portfoliocomponent";
import banner from "../assets/images/form-banners/banner1/banner-img.png";

import CustomComponents from "../components/custom/Custom-components";
import FormBannerComponent from "../components/custom/sections/formbannercomponent";
const Products = () => {
    return (
        <>
        
            <div className="static-slider-head banner2 bg-dark text-center">
                <Container>
                    <Row className=" d-flex align-items-center justify-content-center">
                        <Col lg="6" md="6" className="align-self-center">
                            <Image src={img3} alt="img" className="img-responsive img-rounded"  />
                        </Col>
                        <Col lg="6" md="6" className="align-self-center">
                            <h4 className="subtitle font-light">Products</h4>
                            <h1 className="title mb-5">
                                We love to make great things, things that matter.            </h1>
                            <h4 className="subtitle font-light">
                                Funding h andshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.            </h4>
                        </Col>
                    </Row>
                </Container>
            </div>            
        <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="12" className="text-center">
            <p className="text-center text-gray fs-1 display-7">Our Products</p>
              <h2 className="title display-4">Value proposition accelerator product management venture</h2>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">
                    Branding for Theme Designer
                  </h5>
                  <p className="m-b-0 font-14">Digital Marketing</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Button Designs Free</h5>
                  <p className="m-b-0 font-14">Search Engine</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Branding & Co Agency</h5>
                  <p className="m-b-0 font-14">Admin templates</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Zukandre Phoniex</h5>
                  <p className="m-b-0 font-14">Branding</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Sionage Mokcup</h5>
                  <p className="m-b-0 font-14">Wll Mockup</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Hard Cover Book Mock</h5>
                  <p className="m-b-0 font-14">Book Covers</p>
                </CardBody>
              </Card>
            </Col>
            <div className="text-center mt-5 w-100">
              <a href="product"><button className="btn btn-outline-dark text-muted">Load More</button></a>
            </div>
          </Row>
        </Container>
      </div>
    </div>

            <section className="bg-dark pt-5 pb-5">
                <div className="container">
                    <p className="text-center text-light">Our numbers</p>
                    <h1 className="text-center text-white w-lg-75 mx-auto fs-xl-6 fs-lg-4 fs-3">Handshake infographic mass market crowdfunding iteration.</h1>
                    <div className="row mt-5">
                    <div id="banner1" className="banner bg-dark">
                        <Container>
                            <Row>
                                <Col lg="12" md="7" className="align-self-center">                           
                                <Form className="m-t-40 text-center">
                                    <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter Email Address"
                                    className="font-16"
                                    />
                                    <input
                                    type="submit"
                                    value="Get Started"
                                    className="bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                                    />
                                </Form>
                                </Col>                            
                            </Row>
                        </Container>
                    </div>                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products;