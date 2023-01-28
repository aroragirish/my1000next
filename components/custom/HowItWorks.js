import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Image from 'next/image';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Col, Container, Row } from 'reactstrap';
import authenticationImage from '../../assets/images/authentication.svg';
import kyc from '../../assets/images/singing-contract.gif';
import addBusiness from '../../assets/images/packaging-for-delivery.gif';
import busniessAnalysis from '../../assets/images/business-analysis.gif';
import watchGrow from '../../assets/images/business-investor-gaining-profit-from-investment.gif';

const steps = [
    {
        label: 'Register/Login with your email',
        description: `Click on 'Login/Register' button present in the header. Enter your email address and verify OTP sent on your email address. If you are not already registered with us, you will be redirected to register page where you need to fill few information to get started. You can choose to register as Business or as an Investor. If you are already registered with us, you will be redirected to Dashboard`,
    },
    {
        label: 'Complete KYC and Add Bank details',
        description:
            'Complete your Know Your Customer (KYC) process by providing your AADHAR card or PAN (Permanent Account Number) and add your bank account details. ',
    },
    {
        label: 'Add your own business listing',        
        businessOnly: true,
        description: `If you are registered as a Business with us, you list your own Business to gain maximum funding. User registered as Business are not allowed to invest in opportunities. To invest, you need to register as a Investor`,
    },
    {
        label: 'Select an opportunity to invest',        
        investorOnly: true,
        description: `Select an opportunity from our registered businesses to invest. You can use multiple payment options to invest including offline payment`,
    },
    {
        label: 'See your capital grow',
        description: `Once you are done with all the processes, you can track all your investments (for Investors) or funding recieved (for Businesses).`,
    }
];

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    return (
        <Container className='p-5'>
            <Row>
                <Col lg={6}>
                    <h2 className='mb-5'>
                        How it works?
                    </h2>
                    <Box sx={{ maxWidth: 500 }}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((step, index) => (
                                <Step onClick={() => setActiveStep(index)} key={step.label}>
                                    <StepLabel
                                        onMouseEnter={() => setActiveStep(index)}
                                        optional={
                                            step.investorOnly ? (
                                              <Typography variant="caption">Investors</Typography>
                                            ) : (
                                                step.businessOnly ? <Typography variant="caption">Businesses</Typography> : null
                                            )
                                          }
                                    >
                                       <h3> {step.label}</h3>
                                    </StepLabel>
                                    <StepContent>
                                        <Typography>{step.description}</Typography>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} sx={{ p: 3 }}>
                                <Typography>All steps completed - you&apos;re finished</Typography>
                                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                    Reset
                                </Button>
                            </Paper>
                        )}
                    </Box>
                </Col>
                <Col className='d-none d-lg-block' lg={6}>
                    {activeStep === 0 && (
                            <Image layout='responsive' src={authenticationImage} />
                        )}
                    {activeStep === 1 && (
                            <Image layout='responsive' src={kyc} />
                        )}
                    {activeStep === 2 && (
                        <Image layout='responsive' src={addBusiness} />
                    )}
                    {activeStep === 3 && (
                        <Image layout='responsive' src={busniessAnalysis} />
                    )}
                    {activeStep === 4 && (
                        <Image layout='responsive' src={watchGrow} />
                    )}
                </Col>
            </Row>
        </Container>
    );
}