import React, { useEffect, useState } from "react";
import { Row, Col, Container, Card, FormGroup, Button } from "reactstrap";
import Image from "next/image";
import img4 from "../assets/images/portfolio/laptop.png";

import img5 from "../assets/images/portfolio/kyc.png";
import { getAllBusinesses } from "../services/businessService";
import Link from "next/link";

const dashboard = () => {

    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        getAllBusinesses().then((res) => {
            setBusinesses(res.data)
        })
    }, [])
    return (
        <div className="mt-5">
            <div className="blog-home2">
                {businesses.length && (<Container>
                    <Row style={{
                        alignItems: 'center'
                    }} className="justify-content-between">
                        <Col md="8" className="text-left">
                            <h2 className="title">Top Investment Opportunities</h2>
                            <h6 className="subtitle">
                                Here are top opportunities for you to invest and gain maximum output
                            </h6>
                        </Col>
                        <Col md="3" className="text-right">
                          <FormGroup className="m-t-15">
                            <Link href="/product" class="text-primary" style="font-size: 24px; cursor: pointer;">VIEW ALL</Link>
                          </FormGroup>
                        </Col>
                    </Row>
                    <Row className="justify-content-left">                        
                            {businesses.length ? businesses.sort((a,b) => (b.preTaxReturns - a.preTaxReturns)).slice(0, 3).map((business) => {
                                return (
                                    <Col key={business._id} className="m-t-40" lg="4" md="6">
                                    <Card style={{
                                            padding: '10px',
                                            boxShadow: '2px 2px 2px 2px lightgrey'
                                    }}>
                                        <Link href={`/product/${business._id}`} className="linking text-themecolor m-t-5" passHref>
                                        <a href="#">
                                            <Image
                                                width={370}
                                                height={246}
                                                className="card-img-top"
                                                src={business.image}
                                                alt="wrappixel kit"
                                            />
                                        </a>
                                        </Link>
                                        <div className="date-pos bg-info-gradiant">
                                            upto<span>{business.preTaxReturns}%</span>
                                        </div>
                                        <h3 className="font-medium m-t-30">
                                            <a href="#" className="link">
                                                {business.title}
                                            </a>
                                        </h3>
                                        <p style={{
                                            height: '50px'
                                        }} className="m-t-20">
                                            {business.description}
                                        </p>
                                        <hr />
                                        <Row>
                                            <Col lg={4}>
                                                <div>
                                                    <strong> {business.preTaxReturns}% </strong>
                                                </div>
                                                <div className="text-muted" style={{
                                                    fontSize: '14px'
                                                }}>
                                                    pre-tax returns
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div>
                                                    <strong> {business.tenure} </strong>
                                                </div>
                                                <div className="text-muted" style={{
                                                    fontSize: '14px'
                                                }}>
                                                    {business.tenureDuration} tenure
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div>
                                                    <strong>{business.minInvestment} </strong>
                                                </div>
                                                <div className="text-muted" style={{
                                                    fontSize: '14px'
                                                }}>
                                                    minimum investment
                                                </div>
                                            </Col>
                                        </Row>
                                        <Link href={`/product/${business._id}`} className="linking text-themecolor m-t-5" passHref>
                                            <a>Learn More <i className="ti-arrow-right"></i></a>
                                        </Link>
                                    </Card>
                                    
                        </Col>
                                )
                            }) : null }
                    </Row>
                </Container>)}
            </div>
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-shadow card card-body">
                            <div className="card-title">
                                <Image
                                    className="card-img-top"
                                    src={img4}
                                    alt="wrappixel kit"
                                />
                            </div>
                            <h2 className="card-text">Schedule a call</h2>
                            <p className="text-muted">With your Relationship Manager to know more details about the opportunity and clear your doubts</p>
                            <a style={{
                                fontSize: '24px',
                                cursor: 'pointer',
                            }} className="text-primary">
                                Click Here
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card-shadow card card-body">
                            <div className="card-title">
                                <Image
                                    className="card-img-top"
                                    src={img5}
                                    alt="wrappixel kit"
                                />
                            </div>
                            <h2 className="card-text">Share KYC Details</h2>
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