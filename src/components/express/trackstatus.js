import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Col, Row, Toast, ToastBody, ToastHeader, CustomInput } from 'reactstrap';
import {
    Card, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';



const delivery = (props) => {
    return (
        <div>
            <div className="container">
                <br></br>
                <div className="row">
                    <div className="col-6">
                        <Card>
                        <Col xs="6">
                            <Label for="route">ROUTE</Label>
                        </Col>
                        <CardBody>
                        <FormGroup row>
                            <Col sm={10}>
                                <Label for="pickUpLocation">Pick up Location</Label>
                                <Input type="select" name="text" id="routePickup">
                                    <option >--</option>
                                    <option>คณะวิศวกรรมศาสตร์</option>
                                    <option>คณะวิทย์ศาสตร์</option>
                                    <option>คณะสถาปัตยกรรมศาสตร์</option>
                                    <option>คณะเทคโนโลยีสารสนเทศ</option>
                                    <option>คณะเทคโนโลยรการเกษตร</option>
                                    <option>คณะบริการธุรกิจ</option>
                                    <option>คณะศิลป์ศาสตร์</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Label for="pickUpLocation">Drop off Location</Label>
                                <Input type="select" name="text" id="routeDropoff" placeholder="Drop off Location">
                                    <option >--</option>
                                    <option>คณะวิศวกรรมศาสตร์</option>
                                    <option>คณะวิทย์ศาสตร์</option>
                                    <option>คณะสถาปัตยกรรมศาสตร์</option>
                                    <option>คณะเทคโนโลยีสารสนเทศ</option>
                                    <option>คณะเทคโนโลยรการเกษตร</option>
                                    <option>คณะบริการธุรกิจ</option>
                                    <option>คณะศิลป์ศาสตร์</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <Label for="service">ADDITIONAL SERVICES</Label>
                        <FormGroup check>
                            <FormGroup>
                                <div>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Purchase Service" />
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Round Trip" />
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Food Delivery" />
                                </div>
                            </FormGroup>
                        </FormGroup>
                        <Button>Submit</Button>
                        </CardBody>
                        </Card>
                    </div>
                    <div className="col-6">
                        <Card>
                            <Col xs="6">
                                <Label for="rout">Delivery Info</Label>
                            </Col>
                            <CardBody>
                                <FormGroup>
                                    <Input type="text" name="name" id="Name" placeholder="Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="Phone" id="Phone" placeholder="Phone Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="other" id="other" placeholder="Other" />
                                </FormGroup>
                                <Row>
                                    <Col sm={{ size: 'auto', offset: 5 }}>
                                        <Button color="info">Save</Button>{' '}
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default delivery;