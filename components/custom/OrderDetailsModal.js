
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Badge, Container } from 'reactstrap';
import moment from 'moment';
import googleDocs from "../../assets/images/logos/google-docs.png";
import Image from 'next/image';
import { getUserByid } from '../../services/userService';

const OrderDetailsModal = ({ open, order, close }) => {
    const [user, setUser] = useState({});
    const toggle = () => close(false);
    useEffect(() => {
        getUserByid(order.user).then((res) => {
            setUser(res.data);
        });
    }, []);
console.log(order);
  return (
    <Modal size='xl' isOpen={open} toggle={toggle}>
        <ModalHeader >
            <strong>
            {
                order.business.title
            }</strong> {'  '}
            <Badge  color={order.status === 'Pending' ? 'warning' : (
                order.status === 'Rejected' || order.status === 'Cancelled' ? 'danger' : 'success'
            )}>
                {order.status}
            </Badge>
        </ModalHeader>
        <ModalBody>
          <Container>
          <Row>
            <Col lg="4" className='my-3'>
                <strong>
                    Category:
                </strong> {'  '}{order.business.category}
            </Col>
            <Col lg="4" className='my-3'>
                <strong>
                    Amount Invested:
                </strong> {'  '}{order.business.amountInvested}
            </Col>
            <Col lg="4" className='my-3'>
                <strong>
                    Minimum Investment:
                </strong> {'  '}{order.business.minInvestment}
            </Col>
            <Col lg="4" className='my-3'>
                <strong>
                    Minimum Investment:
                </strong> {'  '}{order.business.minInvestment}
            </Col>
            <Col lg="4" className='my-3'>
                <strong>
                    Order Created:
                </strong> {'  '} {moment(order?.business?.createdAt).format('DD/MM/YYYY, h:mm a')}
            </Col>
            <Col lg="4" className='my-3'>
                <strong>
                    Transation Description:
                </strong> {'  '} {order?.description}
            </Col>
            <Col lg="4" className='my-3'>
                <strong>
                    Transation ID:
                </strong> {'  '} {order?.trsId}
            </Col>
            <Col lg="4" className='my-3'>
                <strong>
                    Transaction Proof:
                </strong> {'  '} 
                <Button
                    size='sm'
                    color="link"
                    onClick={() => window.open(order.image, "_blank")}
                    
                  >
                    <Image height={25} width={25} src={googleDocs} />
                    <strong
                    >
                      Download
                    </strong>
                  </Button>
            </Col>
            {
                order?.rejectText && (
                    <Col lg="4" className='my-3'>
                        <strong>
                            Rejection Reason:
                        </strong> {'  '} {order?.rejectText}
                    </Col>
                )
            }
                        {
                user?.name && (
                    <Col lg="4" className='my-3'>
                        <strong>
                            Invested By:
                        </strong> {'  '} {user?.name}
                    </Col>
                )
            }
                        {
                user?.name && (
                    <Col lg="4" className='my-3'>
                        <strong>
                            Investor's Contact:
                        </strong> {'  '} {user?.phone}
                    </Col>
                )
            }
            {
                user?.name && (
                    <Col lg="4" className='my-3'>
                        <strong>
                            Investor's Email:
                        </strong> {'  '} {user?.email}
                    </Col>
                )
            }
          </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
  )
}

export default OrderDetailsModal