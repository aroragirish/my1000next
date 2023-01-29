import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import error from '../assets/images/caution-sign.png';
import Image from 'next/image';

const Error = () => {
    return (
        <>
            <div className="static-slider-head banner2 bg-light mt-5 pt-5">
                <Container>
                    <Row className=" d-flex align-items-center  justify-content-center p-5">
                        <Col lg="12" md="12" className="align-self-center">
                            <h1 className="title text-dark text-center">Oops! Something went wrong...</h1>

                        </Col>
                        <Col lg={12}>
                            <h4 className="subtitle text-dark text-center">
                                Dont worry, we are working on it and will fix it ASAP.
                            </h4>
                        </Col>
                        <Col lg={6}>
                            <Image src={error} layout="responsive" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Error