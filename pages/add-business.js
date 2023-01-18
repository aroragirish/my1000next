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
    Label,
    ButtonGroup
} from "reactstrap";
import axios from 'axios';
import { registerApi } from '../services/authService';
import { addBusiness } from '../services/businessService';
import MyEditor from '../components/custom/MyEditor';
import { getAllCategories } from '../services/categoryService';
const AddBusiness = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [preTaxReturns, setPreTaxReturns] = useState();
    const [tenure, setTenure] = useState();
    const [minInvestment, setMinimumInvestment] = useState();
    const [tax, setTax] = useState();
    const [file, setFile] = useState(null);
    const [perShare, setPerShare] = useState();


    const [email, setEmail] = useState('');
    const [tenureDuration, setSelectedTenureDuration] = useState('weeks');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    const [extraInfo, setValue] = useState('');

    const { user } = useSelector(state => state.user);
    useEffect(async () => {
        if (user.role !== 'business') {
            router.push('/dashboard');
        }
        getAllCategories().then((res) => {
            setCategories(res.data);
        })
        setEmail(user.email);
    }, []);

    const submit = (e) => {
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        const body = {
            title,
            description,
            preTaxReturns,
            tenure,
            minInvestment,
            tax,
            email,
            extraInfo,
            tenureDuration,
            category,
            perShare,
            image: file
        }
        addBusiness(body).then(async (res) => {
            // await saveUser(res);
            router.push('/dashboard');
        });
    }

    return (
        <div className="contact1 bg-dark">
            <Row>
                <Container>
                    <div className="spacer">
                        <Row className="m-0 align-items-center">
                            <Col lg="8">
                                <div style={{
                                    borderRadius: '20px'
                                }} className="contact-box p-r-40 bg-light p-20">
                                    <h3 className="title">Add Business</h3>
                                    <Form onSubmit={(e) => submit(e)}>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="title">Title</Label>
                                                    <Input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="title" placeholder="Enter title" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label for="category">Category</Label>
                                                    <Input value={category} onChange={(e) => setCategory(e.target.value)} style={{
                                                        height: '-webkit-calc(1.5em + 0.75rem + 2px)',
                                                        padding: 0
                                                    }} className='form-control' type='select' name="category" id="category">
                                                        <option>Please select category</option>
                                                        {categories.map((category) => {
                                                            return <option key={category.value} value={category.value}>{category.label}</option>;
                                                        })}
                                                    </Input >
                                                </FormGroup>
                                            </Col>
                                            <Col lg="12">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="description">Description</Label>
                                                    <Input value={description} onChange={(e) => { setDesc(e.target.value) }} type="textarea" className="form-control" id="description" required />
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
                                                    <Label htmlFor="preTaxReturns">Pre Tax Returns</Label>
                                                    <Input value={preTaxReturns} onChange={(e) => { setPreTaxReturns(e.target.value) }} type="number" className="form-control" id="title" placeholder="%" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="tenure">Tenure</Label>
                                                    <Input value={tenure} onChange={(e) => { setTenure(e.target.value) }} type="number" className="form-control" id="title" placeholder="Enter tenure" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <p>Tenure Duration:</p>
                                                    <ButtonGroup>
                                                        <Button
                                                            color="primary"
                                                            outline
                                                            onClick={() => setSelectedTenureDuration('weeks')}
                                                            active={tenureDuration === 'weeks'}
                                                        >
                                                            Weeks
                                                        </Button>
                                                        <Button
                                                            color="primary"
                                                            outline
                                                            onClick={() => setSelectedTenureDuration('months')}
                                                            active={tenureDuration === 'months'}
                                                        >
                                                            Months
                                                        </Button>
                                                        <Button
                                                            color="primary"
                                                            outline
                                                            onClick={() => setSelectedTenureDuration('years')}
                                                            active={tenureDuration === 'years'}
                                                        >
                                                            Years
                                                        </Button>
                                                    </ButtonGroup>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="minInvestment">Min Investment</Label>
                                                    <Input value={minInvestment} onChange={(e) => { setMinimumInvestment(e.target.value) }} type="number" className="form-control" id="title" placeholder="Enter tenure" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="tax">Total tax</Label>
                                                    <Input value={tax} onChange={(e) => { setTax(e.target.value) }} type="number" className="form-control" id="title" placeholder="₹" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="dealSize">Share per min investment</Label>
                                                    <Input value={perShare} onChange={(e) => {
                                                        setPerShare(e.target.value)
                                                    }} type="number" id="dealSize" placeholder="%" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="file">Upload image for your Business</Label>
                                                    <Input onChange={(e) => {
                                                        console.log(e.target.files[0])
                                                        setFile(e.target.files[0])
                                                    }} type="file" id="file" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="12">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="extraInfo">Give us some extra information about your business</Label>

                                                    <MyEditor placeholder='Enter extra info about your business here like highlights, email, phone, address. Use all options to add more good looking content' value={extraInfo} onChange={setValue} id="rte" />
                                                </FormGroup>
                                            </Col>
                                            
                                            <Col lg="12">
                                                <FormGroup check>
                                                    <Input style={{
                                                        height: '20px',
                                                        width: '20px',
                                                    }} required type="checkbox" />
                                                    {'  '}
                                                    <Label style={{
                                                        fontSize: '20px',
                                                        marginLeft: '10px'
                                                    }} check>
                                                        I understand all <a href='#'>Terms and conditions</a>
                                                    </Label>
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
                                <div className="detail-box p-40 bg-light">
                                    <h2 className="text-dark">Add your Business to gain maximum funding!</h2>
                                    <p className="text-dark m-t-30 op-8">
                                        Use our rich editor to add more information about your Business using options like list, links, etc.
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

export default AddBusiness