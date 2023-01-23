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
    Badge,
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
    
    const [tradeName, setTradeName] = useState('');
    const [file, setFile] = useState();
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [tags, setTags] = useState([]);
    const [targetToRaise, setTargetToRaise] = useState();
    const [minSubscription, setMinSubscription] = useState();
    const [incDate, setIncDate] = useState();
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');

    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [firmType, setFirmType] = useState('pvtltd');
    const [employees, setEmployees] = useState();

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
            category,
            email,
            categoryTags: tags,
            description,
            targetToRaise,
            minInvestment: minSubscription,
            extraInfo,
            image: file,
            aboutCompany: {
                tradeName,
                incorporationDate: incDate,
                firm: firmType,
                empCount: employees,
                website,
                location: address
            }
        }
        addBusiness(body).then(async (res) => {
            // await saveUser(res);
            // router.push('/dashboard');
        });
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13 ) {

          event.preventDefault();
            setTags([
                ...tags,
                event.target.value
            ]);
            document.getElementById('tags').value = ''
        }
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
                                                    <Input value={description} placeholder="maximum 300 characters" maxLength={300} onChange={(e) => { setDesc(e.target.value) }} type="textarea" className="form-control" id="description" required />
                                                </FormGroup>
                                            </Col><Col lg="12">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="tags">Tags</Label>
                                                    <Input
                                                    onKeyDown={handleKeyDown} placeholder="maximum 10 characters" maxLength={10}                                                        
                                                    type="text" className="form-control" id="tags" />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="12">
                                                <FormGroup className="m-t-15">
                                                    {tags.map((tag) => {
                                                        return (
                                                            <Badge
                                                                style={{
                                                                    fontSize: '16px',
                                                                    padding: '10px',
                                                                    margin: '5px'
                                                                }}
                                                                key={tag}
                                                                color="primary"
                                                                pill
                                                            >
                                                                {tag} {' '}<span style={{
                                                                    cursor: 'pointer'
                                                                }} onClick={(e) => {
                                                                    setTags((tags) => {
                                                                        return tags.filter(t => tag !== t)
                                                                    })
                                                                }}>
                                                                    x
                                                                </span>
                                                            </Badge>
                                                        )
                                                    })}
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="target">Target To Raise</Label>
                                                    <Input value={targetToRaise} onChange={(e) => { setTargetToRaise(e.target.value) }} type="number" className="form-control" id="target" placeholder="₹" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="target">Minimum investment</Label>
                                                    <Input value={minSubscription} onChange={(e) => { setMinSubscription(e.target.value) }} type="number" className="form-control" id="target" placeholder="₹" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="tradeName">Trade Name of your Business</Label>
                                                    <Input value={tradeName} onChange={(e) => { setTradeName(e.target.value) }} type="text" className="form-control" id="tradeName" placeholder="Enter trade name" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="incDate">Incorporation Date</Label>
                                                    <Input value={incDate} onChange={(e) => { setIncDate(e.target.value) }} type="date" className="form-control" id="incDate" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label for="firmType">Entity type</Label>
                                                    <Input value={firmType} onChange={(e) => setFirmType(e.target.value)} style={{
                                                        height: '-webkit-calc(1.5em + 0.75rem + 2px)',
                                                        padding: 0
                                                    }} className='form-control' type='select' name="firmType" id="firmType">
                                                        <option value="pvtltd">Private Limited / Limited</option>;
                                                        <option value="partnership">Partnership Firm</option>;
                                                        <option value="proprietor">Proprietorship</option>;

                                                    </Input >
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="employees">Number of Employees</Label>
                                                    <Input value={employees} onChange={(e) => { setEmployees(e.target.value) }} type="number" className="form-control" id="employees" placeholder="" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="address">Location</Label>
                                                    <Input value={address} onChange={(e) => { setAddress(e.target.value) }} type="string" className="form-control" id="address" placeholder="Enter complete address" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="website">Website</Label>
                                                    <Input value={website} onChange={(e) => { setWebsite(e.target.value) }} type="string" className="form-control" id="website" placeholder="yourbusiness.com" required />
                                                </FormGroup>
                                            </Col>
                                            
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="file">Upload image for your Business</Label>
                                                    <Input onChange={(e) => {
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