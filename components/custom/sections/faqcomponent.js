import React from "react";
import { Row, Col, Container } from "reactstrap";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const FaqComponent = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      <div className="static-slider10 bg-dark">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
              <h2 className="text-white">Frequently Asked Questions (FAQs)</h2>
              <h6 className="subtitle op-8">
                Using my1000, you can earn maximum returns on your investments. Here are some frequently asked questions.
              </h6>
            </Col>
            <Col md="6" className="text-center">
              <Accordion className="bg-dark text-light accBorder shadow "  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-light"/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '100%', flexShrink: 0 }}>
                    What is minimum amount I can invest?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The minimum amount one can invest in a Business varies business to business. At the time of investing into a Business, you will see one field as Minimum Investment which will define minimum amount require to start investing in respective Business.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="bg-dark text-light accBorder" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-light"/>}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '100%', flexShrink: 0 }}>
                    How long will it require to list my Business
                  </Typography>
                  
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Once you have registered with us as a Business, you will see option to Add your business. After adding all the information about your Business, admin will review and once it is approved by admin, your business will get listed on my1000
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="bg-dark text-light accBorder" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-light"/>}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: '100%', flexShrink: 0 }}>
                    Can I add multiple Businesses with one account?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, you can! You can add multiple businesses from one account. Admin needs to review and approve them to get it listed.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="bg-dark text-light accBorder" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-light" />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: '100%', flexShrink: 0 }}>
                  How MY1000+ perform the investment opportunities?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  MY1000+ team along with its presenting partner  have a collective experience of 2 years in the Maharashtra IT industry. Each offering is vetted and selected by our team of experts.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="bg-dark text-light accBorder" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-light" />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: '100%', flexShrink: 0 }}>
                  How can I get involved with MY1000+?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Joining MY1000+ is easy! Just head to our website and register an account. Once you are registered, you will have access to exclusive investment opportunities that were once only available to the wealthy, giving you the chance to make your mark on the world. With MY1000+, you can get started on the journey of becoming a successful investor or business person. So what are you waiting for? Register now and unlock your potential!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FaqComponent;
