import React, { useEffect, useState } from "react";
import { Row, Col, Container, Card, FormGroup, Button } from "reactstrap";
import Image from "next/image";
import img4 from "../assets/images/portfolio/call-center.gif";
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';
import img5 from "../assets/images/portfolio/file-searching.gif";
import { getAllBusinesses } from "../services/businessService";
import { truncate } from "../utils";
import { useRouter } from "next/router";

const dashboard = () => {
  const [businesses, setBusinesses] = useState([]);
  const {user = {}} = useSelector(state => state.user);
  const router = useRouter();
  useEffect(() => {
    getAllBusinesses().then((res) => {
      setBusinesses(res.data);
    }).catch(() => {
      router.push('/error');
  })
  }, []);
  return (
    <div className="mt-5 pt-5">
      <div className="blog-home2">
        {businesses.length !== 0 && (
          <Container>
            <Row
              style={{
                alignItems: "center",
              }}
              className="justify-content-between"
            >
              <Col md="8" className="text-left">
                <h2 className="title">Top Investment Opportunities</h2>
                <h6 className="subtitle">
                  Here are top opportunities for you to invest and gain maximum
                  output
                </h6>
              </Col>
              <Col md="3" className="text-right">
                <FormGroup className="m-t-15 float-end">
                  <Link
                    href="/product"
                    class="text-primary"
                  >
                  <strong class="text-primary" style={{
                    cursor: 'pointer'
                  }}>  VIEW ALL <i className="ti-arrow-right"></i></strong>
                  </Link>
                </FormGroup>
              </Col>
            </Row>
            <Row className="justify-content-left">
              {businesses.length
                ? businesses
                    .sort((a, b) => b.preTaxReturns - a.preTaxReturns)
                    .slice(0, 3)
                    .map((business) => {
                      return (
                        <Col
                          key={business._id}
                          className="m-t-40"
                          lg="4"
                          md="6"
                        >
                          <Card
                            style={{
                              padding: "10px",
                              boxShadow: "2px 2px 2px 2px lightgrey",
                              borderRadius: "20px",
                            }}
                          >
                            <Link
                              href={`/product/${business._id}`}
                              className="linking text-themecolor m-t-5"
                              passHref
                            >
                              <a>
                                <Image
                                  width={370}
                                  height={246}
                                  className="card-img-top"
                                  src={business.image}
                                  alt="wrappixel kit"
                                />
                              </a>
                            </Link>
                            {/* <div className="date-pos bg-info-gradiant">
                                            upto<span>{business.preTaxReturns}%</span>
                                        </div> */}
                            <h3 className="font-medium m-t-30">
                              <a className="link">
                                {business.title
                                  ? business.title?.toUpperCase()
                                  : ""}
                              </a>
                            </h3>
                            <p
                              style={{
                                height: "50px",
                              }}
                              className="m-t-20"
                            >
                              {truncate(business.description, 100)}
                            </p>
                            <hr />
                            <Row>
                            <Col lg={4}>
                              <div style={{
                                  fontSize: "14px",
                                }}>
                                <strong>
                                  {`${business.tenure} ${business.tenureUnit.charAt(0).toUpperCase() + business.tenureUnit.slice(1)}`}
                                </strong>
                              </div>
                              <div
                                className="text-muted"
                                style={{
                                  fontSize: "14px",
                                }}
                              >
                                Tenure
                              </div>
                            </Col>
                              <Col lg={4}>
                                <div style={{
                                  fontSize: "14px",
                                }}>
                                  <strong>
                                    {" "}
                                    {business.category
                                      ? business.category?.toUpperCase()
                                      : ""}{" "}
                                  </strong>
                                </div>
                                <div
                                  className="text-muted"
                                  style={{
                                    fontSize: "14px",
                                  }}
                                >
                                  Category
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div>
                                  <strong>
                                    ₹{" "}
                                    {business.minInvestment
                                      ? business.minInvestment
                                      : 0}{" "}
                                  </strong>
                                </div>
                                <div
                                  className="text-muted"
                                  style={{
                                    fontSize: "14px",
                                  }}
                                >
                                  Minimum investment
                                </div>
                              </Col>
                            </Row>
                            <Link
                              href={`/product/${business._id}`}
                              className="linking text-themecolor m-t-5"
                              passHref
                            >
                              <a>
                                Learn More <i className="ti-arrow-right"></i>
                              </a>
                            </Link>
                          </Card>
                        </Col>
                      );
                    })
                : null}
            </Row>
          </Container>
        )}
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
                  height={200}
                  width={200}
                />
              </div>
              <h2 className="card-text">
                {user?.role === 'investor' ? 'Investing for the first time?' : 'Adding business for the first time?'}
              </h2>
              <p className="text-muted">
                Call us to get in touch with our Relationship Manager to know more details about the
                opportunities and clear your doubts
              </p>
              <a
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                }}
                className="text-primary"
              >
                Click Here
              </a>
            </div>
          </div>
          {
            (user?.role === 'investor' && !user?.kycDone) && (
              <div className="col-md-12">
            <div className="card-shadow card card-body">
              <div className="card-title">
                <Image
                  className="card-img-top"
                  src={img5}
                  alt="wrappixel kit"
                  height={200}
                  width={200}
                />
              </div>
              <h2 className="card-text">Share KYC Details</h2>
              <p className="text-muted">It won't take more than 2 minutes</p>
              <Link
                style={{
                  cursor: "pointer",
                }}
                className="text-primary"
                href="/add-documents"
              >
               <span style={{
                fontSize: '24px',
                cursor: 'pointer',
                color: 'blue'
               }}> Complete KYC</span>
              </Link>
            </div>
          </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default dashboard;
