import { Container, Alert, Row, CardHeader, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from "reactstrap";
import Image from "next/image";
import banner from "../../../assets/images/form-banners/banner1/banner-img.png";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const FormBannerComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useSelector(state => state.user);
  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, []);
  const [showVerify, setShowVerify] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [emailSentFail, setEmailFail] = useState(false);

  const [otp, setOtp] = useState();
  const [email, setEmail] = useState('');

  const sendOtp = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const body = {
      email
    }
    axios.post('http://ec2-3-110-38-238.ap-south-1.compute.amazonaws.com:5000/v1/auth/send-otp', body).then((res) => {
      console.log(res);
      setShowSuccess(true);
      setShowVerify(true);
      setOtp();
    }).catch((err) => {
      setEmailFail(true);
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

  const regiterUser = async (res) => {
    dispatch({
      type: 'USER_NEEDS_REGISTRATION',
      payload: res.data
    })
  }

  const verifyOtp = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const body = {
      email,
      otp
    }
    axios.post('http://ec2-3-110-38-238.ap-south-1.compute.amazonaws.com:5000/v1/auth/verify-otp', body).then(async (res) => {
      if (!res.data.registered) {
        console.log('herree', res);
        await regiterUser(res);
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
  return (
    <div>
      {/* <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Form Banner</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="bg-dark">

        <section>
          <div id="banner1" className="banner spacer">
            <Container>
              <Row>
                <Col lg="5" md="7" className="align-self-center">
                  <h2 className="title font-bold">
                    Get started with awesome earning opportunities!
                  </h2>
                  <p className="m-t-40 m-b-30">
                    To accomplish great things, we must not only act, but also
                    dream; not only plan, but also believe.
                  </p>
                  
                <Container className='mt-2'>
                    <Row>
                      <Col md="12">
                        {showSuccess && <Alert toggle={() => setShowSuccess(false)} dismissible color="success">
                          OTP Sent successfully
                        </Alert>}

                        {
                          emailSentFail && (<Alert toggle={() => setEmailFail(false)} dismissible color="danger">
                            Unable to sent an email!
                          </Alert>)
                        }
                      </Col>
                    </Row>
                  </Container>
                  {showVerify ? <Form onSubmit={verifyOtp} className="m-t-40">
                    <input
                      type="number"
                      name="otp"
                      placeholder="Enter OTP received"
                      className="font-16 get-started"
                      value={otp} onChange={(e) => setOtp(e.target.value)}
                      required

                    />
                    <input
                      type="submit"
                      value="Submit OTP"
                      className="bg-success font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                    />
                    <Button className="mr-5 float-right" onClick={() => setShowVerify(false)} color="link">Go Back</Button>
                  </Form> : <Form onSubmit={(e) => sendOtp(e)} className="m-t-40">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      className="font-16 get-started"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      required

                    />
                    <input
                      type="submit"
                      value="Get Started"
                      className="bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                    />
                  </Form>}
                  
                </Col>
                <Col lg="6" md="5" className="align-self-center ml-auto">
                  <Image
                    src={banner}
                    alt="We are Digital Agency"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormBannerComponent;
