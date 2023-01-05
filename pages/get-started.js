import React from 'react';
import { Container, Row, CardHeader, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';

const GetStarted = () => {
  return (
    <div className='container d-flex align-items-center justify-content-center text-center mt-5 mb-5 '>
        <Card
        className='border-dark'
        style={{
            width: '35rem',
            boxShadow: '10px 5px 5px lightgrey'
          }}>
        <CardHeader>
    Login
  </CardHeader>
  <CardBody>
        <Container>
                <Row>
                    <Col md="12">
                        <Form className="row mt-3">
                            <FormGroup className="col-md-12">
                                <Label htmlFor="email">Email Address</Label>
                                <Input type="email" className="form-control" id="email" placeholder="Enter email" />
                            </FormGroup>
                            <Col md="12">
                                <Button type="submit" className="btn btn-success waves-effect waves-light m-r-10">Submit</Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </CardBody>
            </Card>
    </div>
  )
}

export default GetStarted