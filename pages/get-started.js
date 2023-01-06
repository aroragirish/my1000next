import React, { useState, useEffect } from 'react';
import { Container, Alert, Row, CardHeader, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'

const GetStarted = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  
  const {user} = useSelector(state => state.user);
  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, []);
  const [showVerify, setShowVerify] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [otp, setOtp] = useState();
  const [email, setEmail] = useState('');

  const sendOtp = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const body = {
      email
    }
    axios.post('http://localhost:3001/v1/auth/send-otp', body).then((res) => {
      console.log(res);
      setShowSuccess(true);
      setShowVerify(true);
      setOtp();
    }).catch((err) => {
      console.log(err);
    });
  }

  const saveUser = async (res) => {
    dispatch({
      type: 'SAVE_USER',
      payload: {
        user: res.data.user,
        tokens: res.data.tokens
      }
    })
  }

  const verifyOtp = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const body = {
      email,
      otp
    }
    axios.post('http://localhost:3001/v1/auth/verify-otp', body).then(async (res) => {
      if (!res.data.registered) {
        router.push('/register');
      } else {
        await saveUser(res);
        router.push('/dashboard');
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (<>
    <Container className='mt-5'>
      <Row>
        <Col md="12">
          {showSuccess && <Alert toggle={() => setShowSuccess(false)} dismissible color="success">
            OTP Sent successfully
          </Alert>}

          {/* <Alert color="danger">
                            I am an alert and I can be dismissed!
                        </Alert> */}
        </Col>
      </Row>
    </Container>
    {showVerify ? <div className='container d-flex align-items-center justify-content-center text-center mt-5 mb-5 '>
      <Card
        className='border-dark'
        style={{
          width: '35rem',
          boxShadow: '10px 5px 5px lightgrey',
          border: '0.5px solid lightgray'
        }}>
        <CardHeader>
          <h3> Verify OTP</h3>
        </CardHeader>
        <CardBody>
          <Container>
            <Row>
              <Col md="12">
                <Form onSubmit={verifyOtp} className="row mt-3">
                  <FormGroup className="col-md-12">
                    {/* <Label htmlFor="email">OTP</Label> */}
                    <Input value={otp} onChange={(e) => setOtp(e.target.value)} type="number" required className="form-control" id="number" placeholder="Enter OTP received" />
                  </FormGroup>
                  <Col md="12" className='pt-3'>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      e.nativeEvent.stopImmediatePropagation();
                      setShowVerify(false)
                    }} className="btn btn-info waves-effect waves-light m-r-10">Go Back</Button>
                    <Button type="submit" className="btn btn-success text-dark waves-effect waves-light m-r-10">Submit</Button>
                  </Col>
                </Form>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div> : <div className='container d-flex align-items-center justify-content-center text-center mt-5 mb-5 '>
      <Card
        className='border-dark'
        style={{
          width: '35rem',
          boxShadow: '10px 5px 5px lightgrey',
          border: '0.5px solid lightgray'
        }}>
        <CardHeader>
          <h3> Let's get started!</h3>
        </CardHeader>
        <CardBody>
          <Container>
            <Row>
              <Col md="12">
                <Form onSubmit={(e) => sendOtp(e)} className="row mt-3">
                  <FormGroup className="col-md-12">
                    {/* <Label htmlFor="email">Email Address</Label> */}
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="form-control" id="email" placeholder="Enter email" />
                  </FormGroup>
                  <Col md="12">
                    <Button className="btn btn-success text-dark waves-effect waves-light m-r-10">Submit</Button>
                  </Col>
                </Form>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>}
  </>)

}

export default GetStarted