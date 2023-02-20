import React, { useState } from 'react';
import { Container, Card, Row, Col, Form, FormGroup, Label, Input, Button, CardBody } from 'reactstrap';
import { updateBankDetails, getUserByid, uploadKyc } from '../services/userService';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import googleDocs from "../assets/images/logos/google-docs.png";
import Image from 'next/image';
import Link from 'next/link';

const AddDocuments = () => {

    const [aadhar, setAadhar] = useState();
    const [pan, setPan] = useState();
    const { user } = useSelector(state => state.user);

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
        console.log(aadhar, pan)

        const body = {}
        const data = jsonToFormData(body);
        data.append('pan', pan);
        data.append('aadhar', aadhar);
        uploadKyc(data).then(async (res) => {
            router.push('/dashboard');
        }).catch(() => {
            router.push('/error');
        });
    }
    if (user.kycDetails) {
        return (
            <div className='bg-light mt-5'>
                <Container style={{
                    borderRadius: '50px',
                    marginTop: '95px'
                }} className='bg-dark text-white p-5'>
                    <div className="" id="forms-component">
                        <Container>
                            <Row className="justify-content-center">
                                <Col md="7" className="text-center">
                                    <h2 className="title font-bold text-white pt-5">
                                        You have already uploaded below documents
                                    </h2>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Container className='px-5 mt-5'>
                        <div className='d-flex justify-content-around'>
                            <div style={{
                                cursor: 'pointer'
                            }} onClick={() => window.open(user.kycDetails.aadhar, "_blank")}>
                                <Image className='d-block' height={100} width={100} src={googleDocs} />

                                <br /><br />
                                <p className='text-center text-white'>
                                    AADHAR
                                </p>

                            </div >
                            <div style={{
                                cursor: 'pointer'
                            }} onClick={() => window.open(user.kycDetails.pan, "_blank")}>
                                <Image className='d-block' height={100} width={100} src={googleDocs} />

                                <br /><br />
                                <p className='text-center text-white'>
                                    PAN
                                </p>

                            </div >
                        </div>

                        <i className='text-center mt-5'>
                            Admin will verify your documents after they are updated. It takes around 2 days to reflect on the system. If you want to change the uploaded documents, you can always reach out to us on:
                            <Link href="mailto:info@mytt.in">
                                <div style={{
                                    cursor: 'pointer'
                                }} className="d-inline round-social mail">
                                    <a className="link text-white">
                                        info@mytt.in
                                    </a>
                                </div>
                            </Link>
                        </i>
                    </Container>

                </Container>
            </div>
        )
    }
    return (
        <div className='bg-light mt-5'>
            <Container style={{
                borderRadius: '50px',
                marginTop: '95px'
            }} className='bg-dark text-white p-5'>
                <div className="" id="forms-component">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="7" className="text-center">
                                <h2 className="title font-bold text-white pt-5">
                                    Upload your documents to get KYC done
                                </h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className='px-5 mt-5'>
                    <Row>
                        <Col md="12">
                            <Form onSubmit={(e) => submit(e)} className="row">
                                <FormGroup row>
                                    <Label
                                        for="aadhar"
                                        sm={3}
                                        size="lg"
                                    >
                                        AADHAR Card
                                    </Label>
                                    <Col sm={9}>
                                        <Input name='aadhar' onChange={(e) => {
                                            setAadhar(e.target.files[0])
                                        }} type="file" id="aadhar" required />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                        for="pan"
                                        sm={3}
                                        size="lg"
                                    >
                                        PAN Card
                                    </Label>
                                    <Col sm={9}>
                                        <Input name='pan' onChange={(e) => {
                                            setPan(e.target.files[0])
                                        }} type="file" id="pan" required />
                                    </Col>
                                </FormGroup>
                                <i className='text-center mt-5'>
                                    Admin will verify your documents after they are updated. It takes around 2 days to reflect on the system.
                                </i>
                                <Col className='my-5' md="12">
                                    <Button type="submit" className="btn btn-info waves-effect waves-light float-end">Submit</Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default AddDocuments