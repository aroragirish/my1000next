import React from "react";
import { Container, Row, Col, Button, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../assets/purchase.gif";
import img5 from "../assets/images/portfolio/file-searching.gif";
import Link from "next/link";


const GetInvestment = () => {
    return (
        <>
            <div className="static-slider-head banner2 bg-dark text-center mt-5 pt-5">
                <Container>
                    <Row className=" d-flex align-items-center justify-content-center p-5">
                        <Col lg="12" md="12" className="align-self-center">
                            <div className="container mt-5 text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card-shadow card card-body">
                                            <div className="card-title">
                                                <Image
                                                className="card-img-top"
                                                src={img1}
                                                alt="wrappixel kit"
                                                height={200}
                                                width={200}
                                                />
                                            </div>
                                            <h2 className="card-text">You don’t have made any investments yet.</h2>
                                            <p className="text-muted">                                                
                                                Explore all opportunities to gain maximum returns
                                            </p>
                                            <Col lg="12">
                                            <Link href="/product" passHref>
                                                <Button
                                                    color="primary" outline
                                                    >
                                                    Explore
                                                </Button>
                                            </Link>
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default GetInvestment