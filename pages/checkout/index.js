import React, { useEffect, useState } from "react";
import { addOrder } from "../../services/orderService";
import router from "next/router";
import {
  Col,
  Container,
  Row,
  ToastHeader,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Form,
  FormGroup,
  Input,
  Label,
  Alert,
  FormFeedback,
} from "reactstrap";
import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";

const ProductId = () => {
  const { checkedOutOrder } = useSelector((state) => state.order);
  const [business] = useState(checkedOutOrder);
  const [investment, setInvestment] = useState();
  const [trsId, setTrsId] = useState("");
  const [description, setDesc] = useState("");
  const [file, setFile] = useState();
  const [payment, setPayment] = useState("offline");
  const [offlinepayment, setofflinePayment] = useState("upi");
  const dispatch = useDispatch();
  useEffect(() => {
    if (business) {
        setInvestment(business.minInvestment);
    } else {
      router.push('/product');
    }
    return () => {
        dispatch({
            type: 'ADD_PENDING_ORDER'
        })
    }
  }, []);
  const checkout = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    console.log(investment);
    const body = {
      business: {
        businessId: business?._id,
        amountInvested: investment,
        minInvestment: business?.minInvestment,
        category: business.category,
        title: business.title
      },
      trsId,
      description,
      image: file,
    };
    const data = jsonToFormData(body);
    addOrder(data).then(async (res) => {
      router.push("/my-orders");
    }).catch(() => {
      router.push('/error');
  });
  };
  const buildFormData = (formData, data, parentKey) => {
    if (
      data &&
      typeof data === "object" &&
      !(data instanceof Date) &&
      !(data instanceof File)
    ) {
      Object.keys(data).forEach((key) => {
        buildFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key
        );
      });
    } else {
      const value = data == null ? "" : data;

      formData.append(parentKey, value);
    }
  };

  const jsonToFormData = (data) => {
    const formData = new FormData();

    buildFormData(formData, data);

    return formData;
  };
  const onChangeValue = (event) => {
    setPayment(event.target.value);
  };
  const onChangeOfflineValue = (event) => {
    setofflinePayment(event.target.value);
  };
  if (business) {
    return (
      <Container
        style={{
          marginBottom: "100px",
          marginTop: "100px"
        }}
      >
        <Row>
          <Col lg={7}>
            <div className="">
              {" "}
              <Card
                style={{
                  width: "40rem",
                }}
              >
                <Image 
                  title=""
                  width="100%"
                  height="75%"
                  layout="responsive" alt="Sample" src={business.image} />
                <CardBody>
                  <CardTitle tag="h5">{business.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {business.category.toUpperCase()}
                  </CardSubtitle>
                  <CardText>
                    <h5 className="font-medium m-t-20">Minimum Investment</h5>
                    <strong>
                      {" "}
                      ₹ {business.minInvestment
                        ? business.minInvestment
                        : 0}{" "}
                    </strong>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col lg={3}>
            <div className="">
              {" "}
              <Card
                style={{
                  width: "40rem",
                }}
              >
                <CardBody>
                  <CardTitle>
                    <legend>Invest Details</legend>
                  </CardTitle>

                  <CardText>
                    <CardText>
                      <h5 className="font-medium m-t-20">Minimum Investment</h5>
                      <strong>
                        {" "}
                        ₹ {business.minInvestment
                          ? business.minInvestment
                          : 0}{" "}
                      </strong>
                      <Form>
                        <FormGroup className="m-t-15">
                          <Label htmlFor="title">Investment</Label>
                          <Input
                            value={investment}
                            onChange={(e) => {
                              setInvestment(e.target.value);
                            }}
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter Investment"
                            invalid={business.minInvestment > investment}
                          />

                          <FormFeedback invalid>
                            Investment should be greater than min investment
                            amount
                          </FormFeedback>
                        </FormGroup>
                      </Form>
                      {/* <FormGroup> */}
                      <div onChange={onChangeValue}>
                        <legend>Payment</legend>
                        <FormGroup check>
                          <Input
                            type="radio"
                            value="online"
                            name="payment"
                            checked={payment === "online"}
                          />{" "}
                          <Label check>Online</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="radio"
                            value="offline"
                            name="payment"
                            checked={payment === "offline"}
                          />{" "}
                          <Label check>Offline</Label>
                        </FormGroup>
                      </div>
                      {/* </FormGroup> */}
                    </CardText>
                  </CardText>
                </CardBody>
              </Card>
              {payment === "offline" && (
              <Card style={{
                width: "40rem",
              }} inverse color="info">
                <CardBody>
                  <p><strong>Bank: </strong>ICICI Bank</p>
                  <p><strong>Branch Name: </strong>Bund Garden Pune</p>
                  <p><strong>Account Number: </strong>000505034152</p>
                  <p><strong>IFSC: </strong>ICIC0000005</p>
                  <p><strong>Account Holder Name: </strong>MYTHINK TANK MULTIMEDIA PVT LTD</p>

                </CardBody>
              </Card>
              )}
              {payment === "offline" ? (
                <Card
                  style={{
                    width: "40rem",
                  }}
                >
                  
              <hr />
                  <Form onSubmit={checkout}>
                    <div onChange={onChangeOfflineValue}>
                      <FormGroup check inline>
                        <Input
                          type="radio"
                          value="cash"
                          name="offlinepayment"
                          checked={offlinepayment === "cash"}
                        />
                        <Label check>Cash</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input
                          type="radio"
                          value="upi"
                          name="offlinepayment"
                          checked={offlinepayment === "upi"}
                        />
                        <Label check>UPI</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input
                          type="radio"
                          value="cheque"
                          name="offlinepayment"
                          checked={offlinepayment === "cheque"}
                        />
                        <Label check>Cheque</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input
                          type="radio"
                          value="neftimps"
                          name="offlinepayment"
                          checked={offlinepayment === "neftimps"}
                        />
                        <Label check>NEFT/IMPS</Label>
                      </FormGroup>
                    </div>
                    <FormGroup className="m-t-15">
                      <Label htmlFor="trsId">Transation Id</Label>
                      <Input
                        value={trsId}
                        onChange={(e) => {
                          setTrsId(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="trsId"
                        placeholder="Enter Transation Id"
                        required
                      />
                    </FormGroup>
                    <FormGroup className="m-t-15">
                      <Label htmlFor="description">Description</Label>
                      <Input
                        value={description}
                        placeholder="maximum 300 characters"
                        maxLength={300}
                        onChange={(e) => {
                          setDesc(e.target.value);
                        }}
                        type="textarea"
                        className="form-control"
                        id="description"
                        required
                      />
                    </FormGroup>
                    <FormGroup className="m-t-15">
                      <Label htmlFor="file">Upload Payment receipt</Label>
                      <Input
                        name="image"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                        type="file"
                        id="file"
                        required
                      />
                    </FormGroup>
              <Button color="primary" >
                Submit
              </Button>
                  </Form>
                </Card>
              ) : (
                <Alert color="warning">
                  Online payment gateway coming soon...
                </Alert>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  return null;
};

export default ProductId;
