import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deliveryExpress } from '../../store/actions/deliveryActions'
import { Redirect } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Col, Row, Toast, ToastBody, ToastHeader, CustomInput } from 'reactstrap';
import {
    Card, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';
import { Media } from 'reactstrap';


class delivery extends Component {
    state = {
        name: '',
        PhoneNumber: '',
        other: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.deliveryExpress(this.state);
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div>
                <div className="container">
                    <br></br>
                    <div className="container white">
                        <Media>
                            <Media left top href="#">
                                <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                            </Media>
                            <Media body>
                                <Media heading>
                                    Top aligned media
                                </Media>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </Media>
                        </Media>
                        <Media className="mt-1">
                            <Media left middle href="#">
                                <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                            </Media>
                            <Media body>
                                <Media heading>
                                    Middle aligned media
          </Media>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
                        </Media>
                        <Media className="mt-1">
                            <Media left bottom href="#">
                                <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                            </Media>
                            <Media body>
                                <Media heading>
                                    Bottom aligned media
          </Media>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
                        </Media>
                    </div>
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
                                                <option>คณะวิทยาศาสตร์</option>
                                                <option>คณะสถาปัตยกรรมศาสตร์</option>
                                                <option>คณะเทคโนโลยีสารสนเทศ</option>
                                                <option>คณะเทคโนโลยรการเกษตร</option>
                                                <option>คณะบริหารธุรกิจ</option>
                                                <option>คณะศิลปศาสตร์</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={10}>
                                            <Label for="pickUpLocation">Drop off Location</Label>
                                            <Input type="select" name="text" id="routeDropoff" placeholder="Drop off Location">
                                                <option >--</option>
                                                <option>คณะวิศวกรรมศาสตร์</option>
                                                <option>คณะวิทยาศาสตร์</option>
                                                <option>คณะสถาปัตยกรรมศาสตร์</option>
                                                <option>คณะเทคโนโลยีสารสนเทศ</option>
                                                <option>คณะเทคโนโลยรการเกษตร</option>
                                                <option>คณะบริหารธุรกิจ</option>
                                                <option>คณะศิลปศาสตร์</option>
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
                                    <form className="white" onSubmit={this.handleSubmit}>
                                        <div className="input-field">
                                            <input type="text" id='name' onChange={this.handleChange} />
                                            <label htmlFor="name">Name</label>
                                        </div>

                                        <div className="input-field">
                                            <input type="number" id='PhoneNumber' onChange={this.handleChange} />
                                            <label htmlFor="PhoneNumber">Phone Number</label>
                                        </div>

                                        <div className="input-field">
                                            <input type="text" id='other' onChange={this.handleChange} />
                                            <label htmlFor="other">Other</label>
                                        </div>

                                        <Row>
                                            <Col sm={{ size: 'auto', offset: 5 }}>
                                                <button className="btn pink lighten-1" >Save</button>
                                            </Col>
                                        </Row>
                                    </form>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deliveryExpress: (deliveryProject) => dispatch(deliveryExpress(deliveryProject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(delivery)
