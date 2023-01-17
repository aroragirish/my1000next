import React,{useState, useEffect} from "react";
import Image from "next/image";
import { Container, Row, Col, Card, FormGroup, Form, Label, Input } from "reactstrap";
import img3 from "../assets/images/ui/img5.jpg";
import { getAllBusinesses, getAllBusinessesByCategory } from "../services/businessService";
import { getAllCategories } from "../services/categoryService";


const Products = () => {
  const [businesses, setBusinesses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState('all');

    useEffect(() => [
        getAllCategories().then((res) => {
            setCategories(res.data);
        })
    ], []);

    useEffect(async () => {
      getAllBusinessesByCategory(category, 0, 6).then((res) => {
        setPage(1);
        setBusinesses(res.data);
      });
    }, [category]);

    const loadmore = () => {
        getAllBusinessesByCategory(category, page, 6).then((res) => {
            setPage(page => page + 1);
            setBusinesses([
                ...businesses,
                ...res.data
            ]);
          });
    }

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
      <div className="blog-home2">
                <Container>
                    <Row className="justify-content-between">
                        <Col md="8" className="text-left">
                            <h2 className="title">Browse all the opportunities by category</h2>
                        </Col>
                        <Col md="3" className="text-left">
                          <FormGroup className="m-t-15">
                              <Input value={category} onChange={(e) => setCategory(e.target.value)} style={{                                                    
                                  height: '-webkit-calc(1.5em + 0.75rem + 2px)',
                                  padding: 0
                              }} className='form-control' type='select' name="category" id="category">
                                  <option value={'all'}>All</option>
                                  {categories.map((category) => {
                                      return <option value={category.value}>{category.label}</option>;
                                  })}
                              </Input >
                          </FormGroup>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        
                            {businesses.map((business) => {
                                return (
                                    <Col className="m-t-40" lg="4" md="6">
                                    <Card style={{
                                            padding: '10px',
                                            boxShadow: '2px 2px 2px 2px lightgrey'
                                    }}>
                                        <a href="#">
                                            <Image
                                                width={370}
                                                height={246}
                                                className="card-img-top"
                                                src={`${process.env.NEXT_PUBLIC_BE_URL}/${encodeURIComponent(business.image)}`}
                                                alt="wrappixel kit"
                                            />
                                        </a>
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
                                        <a href="#" className="linking text-themecolor m-t-5">
                                            Learn More <i className="ti-arrow-right"></i>
                                        </a>
                                    </Card>
                                    
                        </Col>
                                )
                            })}
                            
                    <div className="text-center mt-5 w-100">
                        <button onClick={loadmore} className="btn btn-outline-dark text-muted">Load More</button>
                    </div>
                    </Row>
                </Container>
            </div>
            
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