import React, { useState } from 'react';
import { Container, Card, Row, Col, Form, FormGroup, Label, Input, Button, CardBody } from 'reactstrap';
import { updateBankDetails, getUserByid } from '../services/userService';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const AddBank = () => {
    const router = useRouter();
    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [bankName, setBankName] = useState(user.bankDetails.bankName);
    const [branchName, setBranchName] = useState(user.bankDetails.branchName);
    const [accountNumber, setAccountNumber] = useState(user.bankDetails.accountNumber);
    const [ifsc, setIfsc] = useState(user.bankDetails.ifsc);
    const [holderName, setHolderName] = useState(user.bankDetails.holderName);
    const [edit, enableEdit] = useState(false);
    const saveUser = async (user) => {
        dispatch({
          type: 'SAVE_USER',
          payload: {
            user: user,
          }
        })
      }
    const updateBank = (e) => {
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        const body = {
            bankName,
            branchName,
            accountNumber,
            ifsc,
            holderName
        }
        updateBankDetails(body).then(async (res) => {
            const response = await getUserByid(user.id);
            await saveUser(response.data);
            router.push('/dashboard')
        }).catch((err) => {
            console.log(err);
        });
      }

    if (edit) {
        return (
            <div  className='bg-light mt-5'>
                <Container style={{
                borderRadius: '50px',
                marginTop: '95px'
            }} className='bg-dark text-white p-5'>
                <div className="" id="forms-component">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="7" className="text-center">
                                <h2 className="title font-bold text-white pt-5">
                                    Enter your bank details
                                </h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className='px-5 mt-5'>
                    <Row>
                        <Col md="12">
                            <Form onSubmit={(e) => updateBank(e)} className="row">
                                <FormGroup row>
                                    <Label
                                        for="bankname"
                                        sm={3}
                                    >
                                        Bank Name
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            style={{
                                                padding: '0.25rem'
                                            }}
                                            value={bankName}
                                            onChange={(e) => setBankName(e.target.value)}
                                            id="bankname"
                                            name="bankname"
                                            placeholder="Enter Bank Name"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                        for="branchname"
                                        sm={3}
                                    >
                                        Branch Name
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            style={{
                                                padding: '0.25rem'
                                            }}
                                            id="branchname"
                                            value={branchName}
                                            onChange={(e) => setBranchName(e.target.value)}
                                            name="branchname"
                                            placeholder="Enter Branch"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                        for="accountnumber"
                                        sm={3}
                                    >
                                        Account Number
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            style={{
                                                padding: '0.25rem'
                                            }}
                                            id="accountnumber"
                                            name="accountnumber"
                                            value={accountNumber}
                                            onChange={(e) => setAccountNumber(e.target.value)}
                                            placeholder="Enter your account number"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                        for="ifsc"
                                        sm={3}
                                    >
                                        IFSC
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            style={{
                                                padding: '0.25rem'
                                            }}
                                            id="ifsc"
                                            name="ifsc"                                        
                                            value={ifsc}
                                            onChange={(e) => setIfsc(e.target.value)}
                                            placeholder="Enter branch's IFSC code"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                        for="holdername"
                                        sm={3}
                                    >
                                        Account holder name
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            style={{
                                                padding: '0.25rem'
                                            }}
                                            id="holdername"
                                            value={holderName}
                                            onChange={(e) => setHolderName(e.target.value)}
                                            name="holdername"
                                            placeholder="Account holder name"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <Col className='mt-5' md="12">
                                    <Button type="submit" className="btn btn-info waves-effect waves-light float-end">Submit</Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                </Container>
            </div>
        );
    }
    if (!user.bankUpdated && !user.bankDetails) {
        return (
            <div className='bg-light mt-5'>
                <Container style={{
                borderRadius: '50px',
                marginTop: '95px'
            }}  className='bg-dark text-white p-5'>
                <div className="" id="forms-component">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="7" className="text-center">
                                <h2 className="title font-bold text-white pt-5">
                                    Enter your bank details
                                </h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className='px-5 mt-5'>
                    <Row>
                        <Col md="12">
                            <Form onSubmit={(e) => updateBank(e)} className="row">
                                <FormGroup row>
                                    <Label
                                        for="bankname"
                                        sm={3}
                                    >
                                        Bank Name
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            style={{
                                                padding: '0.25rem'
                                            }}
                                            value={bankName}
                                            onChange={(e) => setBankName(e.target.value)}
                                            id="bankname"
                                            name="bankname"
                                            placeholder="Enter Bank Name"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                        for="branchname"
                                        sm={3}
                                    >
                                        Branch Name
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            style={{
                                                padding: '0.25rem'
                                            }}
                                            id="branchname"
                                            value={branchName}
                                            onChange={(e) => setBranchName(e.target.value)}
                                            name="branchname"
                                            placeholder="Enter Branch"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                        for="accountnumber"
                                        sm={3}
                                    >
                                        Account Number
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            style={{
                                                padding: '0.25rem'
                                            }}
                                            id="accountnumber"
                                            name="accountnumber"
                                            value={accountNumber}
                                            onChange={(e) => setAccountNumber(e.target.value)}
                                            placeholder="Enter your account number"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                        for="ifsc"
                                        sm={3}
                                    >
                                        IFSC
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            style={{
                                                padding: '0.25rem'
                                            }}
                                            id="ifsc"
                                            name="ifsc"                                        
                                            value={ifsc}
                                            onChange={(e) => setIfsc(e.target.value)}
                                            placeholder="Enter branch's IFSC code"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                        for="holdername"
                                        sm={3}
                                    >
                                        Account holder name
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            style={{
                                                padding: '0.25rem'
                                            }}
                                            id="holdername"
                                            value={holderName}
                                            onChange={(e) => setHolderName(e.target.value)}
                                            name="holdername"
                                            placeholder="Account holder name"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <Col className='mt-5' md="12">
                                    <Button type="submit" className="btn btn-info waves-effect waves-light float-end">Submit</Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                </Container>
            </div>
        );
    }
    
    return (
        <div  className='bg-light mt-5'>
            <Container style={{
            borderRadius: '50px',
            marginTop: '95px'
        }} className='bg-dark text-white p-5'>
            <div className="" id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center">
                            <h2 className="title font-bold text-white">
                                Your Bank details
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='px-5 mt-5'>
                <Row>
                    <Col md="12">
                        <Form className="row">
                            <FormGroup row>
                                <Label
                                    for="bankname"
                                    sm={3}
                                >
                                    Bank Name
                                </Label>
                                <Col sm={9}>
                                    <h3 className='text-white'>
                                        {user.bankDetails.bankName}
                                    </h3>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="branchname"
                                    sm={3}
                                >
                                    Branch Name
                                </Label>
                                <Col sm={9}>
                                <h3 className='text-white'>
                                        {user.bankDetails.branchName}
                                    </h3>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="accountnumber"
                                    sm={3}
                                >
                                    Account Number
                                </Label>
                                <Col sm={9}>
                                <h3 className='text-white'>
                                        {user.bankDetails.accountNumber}
                                    </h3>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="ifsc"
                                    sm={3}
                                >
                                    IFSC
                                </Label>
                                <Col sm={9}>
                                <h3 className='text-white'>
                                        {user.bankDetails.ifsc}
                                    </h3>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="holdername"
                                    sm={3}
                                >
                                    Account holder name
                                </Label>
                                <Col sm={9}>
                                <h3 className='text-white'>
                                        {user.bankDetails.holderName}
                                    </h3>
                                </Col>
                            </FormGroup>
                            <Col className='mt-5' md="12">
                                <Button type="button" onClick={(e) => {
                                    e.preventDefault();
                                    e.nativeEvent.stopImmediatePropagation();
                                    enableEdit(true)
                                }} className="btn btn-info waves-effect waves-light float-end">
                                <ModeEditOutlineOutlinedIcon fontSize='small'  /> {" "}Edit
                                </Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </Container>
        </div>
    );
}

export default AddBank;