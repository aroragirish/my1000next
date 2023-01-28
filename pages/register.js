import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
    Row,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Button,
    ButtonGroup,
    Label
} from "reactstrap";
import axios from 'axios';
import { registerApi } from '../services/authService';

const register = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [rSelected, setRSelected] = useState('investor');

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState();
    const [name, setName] = useState('');


    const { registerNeeded,user } = useSelector(state => state.user);
    useEffect(() => {
        if (user) {
            router.push('/dashboard');
        } else if (registerNeeded.registered) {
            router.push('/get-started');
        } else {
            setEmail(registerNeeded.email)
        }
    }, []);

    const saveUser = async (res) => {
        dispatch({
          type: 'SAVE_USER',
          payload: {
            user: res.data.user,
            tokens: res.data.tokens
          }
        })
      }

    const submit = (e) => {
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        const body = {
            email,
            phone,
            role: rSelected,
            name
        }
        registerApi(body).then(async (res) => {
            await saveUser(res);
            router.push('/dashboard');
        });
    }

    return (
        <div className="contact1 bg-dark pt-5">
            <Row>
                <Container>
                    <div className="spacer">
                        <Row className="m-0 align-items-center">
                            <Col lg="8">
                                <div style={{
                                    borderRadius: '20px'
                                }} className="contact-box p-r-40 bg-light p-20">
                                    <h3 className="title">Register</h3>
                                    <Form onSubmit={(e) => submit(e)}>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="name">Full Name</Label>
                                                    <Input onChange={(e) => {setName(e.target.value)}} type="text" className="form-control" id="name" placeholder="Enter your full name" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="email">Email Address</Label>
                                                    <Input value={email} disabled type="email" className="form-control" id="email" placeholder="yourid@email.com" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                            <FormGroup className="m-t-15">
                                                <p>Registered as:</p>
                                                <ButtonGroup>
                                                    <Button
                                                        color="primary"
                                                        outline
                                                        onClick={() => setRSelected('investor')}
                                                        active={rSelected === 'investor'}
                                                    >
                                                        Investor
                                                    </Button>
                                                    <Button
                                                        color="primary"
                                                        outline
                                                        onClick={() => setRSelected('business')}
                                                        active={rSelected === 'business'}
                                                    >
                                                        Business
                                                    </Button>
                                                </ButtonGroup>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label className='mb-3' htmlFor="phone">Phone no.</Label>
                                                    <Input onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="phone" placeholder="+91XXXXXXXXXX" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="12">
                                                <Button
                                                    type="submit"
                                                    className="btn btn-danger-gradiant m-t-20 btn-arrow float-right"
                                                >
                                                    <span>
                                                        {" "}
                                                        Submit <i className="ti-arrow-right"></i>
                                                    </span>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="detail-box p-40 bg-info">
                                    <h2 className="text-white">Looks like you are not registered with us.</h2>
                                    <p className="text-white m-t-30 op-8">
                                        Fill the details to quickly register with us!!
                                        <br />
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Row>
        </div>
    )
}

export default register