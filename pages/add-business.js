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
    ButtonGroup,
    UncontrolledPopover,
    PopoverHeader,
    PopoverBody
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
    const [tenure, setTenure] = useState();
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [tags, setTags] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [targetToRaise, setTargetToRaise] = useState();
    const [minSubscription, setMinSubscription] = useState();
    const [incDate, setIncDate] = useState();
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');

    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [firmType, setFirmType] = useState('Private Limited / Limited');
    const [employees, setEmployees] = useState();
    const [tenureUnit, setTenureUnit] = useState('years');
    const [payout, setPayout] = useState('yearly');

    const [extraInfo, setValue] = useState('');

    const { user } = useSelector(state => state.user);
    useEffect(async () => {
        if (user?.role !== 'business') {
            router.push('/dashboard');
        }
        getAllCategories().then((res) => {
            setCategories(res.data);
        }).catch(() => {
            router.push('/error');
        })
        setEmail(user.email);
    }, []);

    const buildFormData = (formData, data, parentKey) => {
        if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
            Object.keys(data).forEach(key => {
                buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
            });
        } else {
            const value = data == null ? '' : data;

            formData.append(parentKey, value);
        }
    }

    const jsonToFormData = (data) => {
        const formData = new FormData();

        buildFormData(formData, data);

        return formData;
    }

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
            tenure,
            tenureUnit,
            payout,
            aboutCompany: {
                tradeName,
                incorporationDate: incDate,
                firm: firmType,
                empCount: employees,
                website,
                location: address
            }
        }
        const data = jsonToFormData(body);
        for (const key of Object.keys(documents)) {
            data.append('documents', documents[key])
        }
        addBusiness(data).then(async (res) => {
            router.push('/dashboard');
        }).catch(() => {
            router.push('/error');
        });
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {

            event.preventDefault();
            setTags([
                ...tags,
                event.target.value
            ]);
            document.getElementById('tags').value = ''
        }
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
                                    <h3 className="title">Add Business</h3>
                                    <Form onSubmit={(e) => submit(e)}>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="title">
                                                        <strong>
                                                        Title
                                                        </strong>
                                                    </Label>
                                                    <Input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="title" placeholder="Enter title" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label for="category">
                                                        <strong>
                                                        Category
                                                        </strong>
                                                    </Label>
                                                    <Input value={category} onChange={(e) => setCategory(e.target.value)} style={{
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
                                                    <Label htmlFor="description">
                                                        <strong>
                                                        Description
                                                        </strong>
                                                    </Label>
                                                    <Input value={description} placeholder="maximum 300 characters" maxLength={300} onChange={(e) => { setDesc(e.target.value) }} type="textarea" className="form-control" id="description" required />
                                                </FormGroup>
                                            </Col><Col lg="12">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="tags">
                                                        <strong>
                                                        Tags
                                                        </strong>
                                                    </Label>
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
                                                    <Label htmlFor="target">
                                                        <strong>
                                                        Target To Raise
                                                        </strong>
                                                    </Label>
                                                    <Input value={targetToRaise} onChange={(e) => { setTargetToRaise(e.target.value) }} type="number" className="form-control" id="target" placeholder="₹" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="target">
                                                        <strong>
                                                        Minimum investment
                                                        </strong>
                                                    </Label>
                                                    <Input value={minSubscription} onChange={(e) => { setMinSubscription(e.target.value) }} type="number" className="form-control" id="target" placeholder="₹" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="3">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="tenure"><strong>Tenure</strong></Label>
                                                    <Input value={tenure} onChange={(e) => { setTenure(e.target.value) }} type="number" className="form-control" id="tenure" required />

                                                </FormGroup>
                                            </Col>
                                            <Col lg="3">
                                                    <FormGroup className="m-t-10">
                                                    <Label htmlFor="tenure">{" "}</Label>
                                                        <Input  value={tenureUnit} onChange={(e) => setTenureUnit(e.target.value)} style={{
                                                            }} className='form-control m-t-15' type='select' name="firmType" id="firmType">
                                                                <option value="years">Years</option>;
                                                                <option value="months">Months</option>;
                                                        </Input >
                                                    </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="target">
                                                        <strong>
                                                        Payout
                                                        </strong>
                                                    </Label>
                                                    <Input  value={payout} onChange={(e) => setPayout(e.target.value)} style={{
                                                            }} className='form-control' type='select' name="firmType" id="firmType">
                                                                <option value="yearly">Yearly</option>;
                                                                <option value="monthly">Monthly</option>;
                                                        </Input >
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="tradeName">
                                                        <strong>
                                                        Trade Name of your Business
                                                        </strong>
                                                    </Label>
                                                    <Input value={tradeName} onChange={(e) => { setTradeName(e.target.value) }} type="text" className="form-control" id="tradeName" placeholder="Enter trade name" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="incDate">
                                                        <strong>
                                                        Incorporation Date
                                                        </strong>
                                                    </Label>
                                                    <Input value={incDate} onChange={(e) => { setIncDate(e.target.value) }} type="date" className="form-control" id="incDate" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label for="firmType">
                                                        <strong>
                                                        Entity type
                                                        </strong>
                                                    </Label>
                                                    <Input value={firmType} onChange={(e) => setFirmType(e.target.value)} style={{
                                                    }} className='form-control' type='select' name="firmType" id="firmType">
                                                        <option value="Private Limited / Limited">Private Limited / Limited</option>;
                                                        <option value="Partnership Firm">Partnership Firm</option>;
                                                        <option value="Proprietorship">Proprietorship</option>;

                                                    </Input >
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="employees">
                                                        <strong>
                                                        Number of Employees
                                                        </strong>
                                                    </Label>
                                                    <Input value={employees} onChange={(e) => { setEmployees(e.target.value) }} type="number" className="form-control" id="employees" placeholder="" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="address">
                                                        <strong>
                                                        Location
                                                        </strong>
                                                    </Label>
                                                    <Input value={address} onChange={(e) => { setAddress(e.target.value) }} type="string" className="form-control" id="address" placeholder="Enter complete address" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="website">
                                                        <strong>
                                                        Website
                                                        </strong>
                                                    </Label>
                                                    <Input value={website} onChange={(e) => { setWebsite(e.target.value) }} type="string" className="form-control" id="website" placeholder="yourbusiness.com" required />
                                                </FormGroup>
                                            </Col>

                                            <Col lg="6">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="file">
                                                        <strong>
                                                        Upload image for your Business
                                                        </strong>
                                                    </Label>
                                                    <Input name='image' onChange={(e) => {
                                                        setFile(e.target.files[0])
                                                    }} type="file" id="file" required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="">
                                                    <Label htmlFor="documents">
                                                        <strong>
                                                        Upload all required documents
                                                        </strong>
                                                    </Label>

                                                    <div
                                                            style={{
                                                                display: 'inline'
                                                            }}>
                                                        <Button
                                                            id="UncontrolledPopover"
                                                            type="button"
                                                            color='link'
                                                        >
                                                            (List)
                                                        </Button>
                                                        <UncontrolledPopover
                                                            placement="top"
                                                            target="UncontrolledPopover"
                                                        >
                                                            <PopoverHeader>
                                                                Required documents
                                                            </PopoverHeader>
                                                            <PopoverBody>
                                                              {firmType === 'Private Limited / Limited' ? 'All Directors KYC, Company Registration Certificate (COI), AOA, MOA, GST Cert, Board Resolution for authorized Signatory, Repayment Plan, Inventory Report, Previous All Compliance. ' : (
                                                                firmType === 'Partnership Firm' ? 'Partnership Deed, All partners KYC, GST cert, Board Resolution for authorized Signatory, Repayment Plan, Inventory Report, Previous All Compliance.' :
                                                                'Owner KYC, Shop act, MSME cert, Udyog adhar, Board Resolution for authorized Signatory, Repayment Plan, Inventory Report, Previous All Compliance'
                                                              )}
                                                            </PopoverBody>
                                                        </UncontrolledPopover>
                                                    </div>
                                                    <Input name='documents' onChange={(e) => {
                                                        console.log(e.target.files)
                                                        setDocuments(e.target.files)
                                                    }} type="file" id="documents" multiple required />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="12">
                                                <FormGroup className="m-t-15">
                                                    <Label htmlFor="extraInfo">
                                                        <strong>
                                                        Give us some extra information about your business
                                                        </strong>
                                                    </Label>

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
                                                      <strong> I understand all <a href='#'>Terms and conditions</a></strong> 
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="12">
                                                <Button
                                                    type="submit"
                                                    className="btn btn-danger-gradiant m-t-20 btn-arrow float-end"
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