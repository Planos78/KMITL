import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deliveryExpress } from '../../store/actions/deliveryActions'
import { Redirect } from 'react-router-dom'
import { Form, FormGroup, Label, Input, FormText, } from 'reactstrap';
import { Container, Col, Row, Toast, ToastBody, ToastHeader, CustomInput } from 'reactstrap';
import {
    Card, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';


class delivery extends Component {
    state = {
        name: '',
        PhoneNumber: '',
        other: '',
        destinationName: '',
        destinationPhoneNumber: '',
        destinationOther: '',
        routePickup:'',
        routeDropoff:'',
        additionalServicePurchase:'',
        additionalServiceRoundTrip:'',
        additionalServiceFoodDelivery:''
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

                    <div className="row">
                        <div className="col-12">
                            <Card>
                                <CardBody>
                                    <FormGroup row>
                                        <Col sm={10}>
                                            <form className="white" onSubmit={this.handleSubmit}>
                                                <h5>Pick up Location</h5>
                                                <select class="browser-default" id="routePickup" required onChange={this.handleChange} >
                                                    <option value="" disabled selected>Choose your location</option>
                                                    <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์</option>
                                                    <option value="คณะวิทยาศาสตร์">คณะวิทยาศาสตร์</option>
                                                    <option value="คณะสถาปัตยกรรมศาสตร์">คณะสถาปัตยกรรมศาสตร์</option>
                                                    <option value="คณะเทคโนโลยีสารสนเทศ">คณะเทคโนโลยีสารสนเทศ</option>
                                                    <option value="คณะเทคโนโลยีการเกษตร">คณะเทคโนโลยีการเกษตร</option>
                                                    <option value="คณะบริหารธุรกิจ">คณะบริหารธุรกิจ</option>
                                                    <option value="คณะศิลปศาสตร์">คณะศิลปศาสตร์</option>
                                                </select>
                                                <div className="input-field">
                                                    <input
                                                        type="text"
                                                        id='name'
                                                        title="กรุณากรอกชื่อ"
                                                        required
                                                        onChange={this.handleChange} />
                                                    <label htmlFor="name">Name</label>
                                                </div>

                                                <div className="input-field">
                                                    <input
                                                        type="tel"
                                                        pattern="[0-9]{10}"
                                                        id='PhoneNumber'
                                                        title="กรุณาใส่เบอร์โทรศัพท์ เป็นจำนวน 10 ตัวอักษร"
                                                        required
                                                        onChange={this.handleChange} />
                                                    <label htmlFor="PhoneNumber">Phone Number</label>
                                                </div>

                                                <div className="input-field">
                                                    <input
                                                        type="text"
                                                        id='other'
                                                        title="เพิ่มเติม"
                                                        onChange={this.handleChange} />
                                                    <label htmlFor="other">Other</label>
                                                </div>
                                                <br />
                                                <br />
                                                <br />
                                                <h5>Drop off Location</h5>
                                                <select class="browser-default" id="routeDropoff" required onChange={this.handleChange} >
                                                    <option value="" disabled selected>Choose your location</option>
                                                    <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์</option>
                                                    <option value="คณะวิทยาศาสตร์">คณะวิทยาศาสตร์</option>
                                                    <option value="คณะสถาปัตยกรรมศาสตร์">คณะสถาปัตยกรรมศาสตร์</option>
                                                    <option value="คณะเทคโนโลยีสารสนเทศ">คณะเทคโนโลยีสารสนเทศ</option>
                                                    <option value="คณะเทคโนโลยีการเกษตร">คณะเทคโนโลยีการเกษตร</option>
                                                    <option value="คณะบริหารธุรกิจ">คณะบริหารธุรกิจ</option>
                                                    <option value="คณะศิลปศาสตร์">คณะศิลปศาสตร์</option>
                                                </select>

                                                {/* <Label for="rout">Delivery Info</Label> */}
                                                <div className="input-field">
                                                    <input
                                                        type="text"
                                                        id='destinationName'
                                                        title="กรุณากรอกชื่อ"
                                                        required
                                                        onChange={this.handleChange} />
                                                    <label htmlFor="destinationName">Name</label>
                                                </div>

                                                <div className="input-field">
                                                    <input
                                                        type="tel"
                                                        pattern="[0-9]{10}"
                                                        id='destinationPhoneNumber'
                                                        title="กรุณาใส่เบอร์โทรศัพท์ เป็นจำนวน 10 ตัวอักษร"
                                                        required
                                                        onChange={this.handleChange} />
                                                    <label htmlFor="destiantionPhoneNumber">Phone Number</label>
                                                </div>

                                                <div className="input-field">
                                                    <input
                                                        type="text"
                                                        id='destinationOther'
                                                        title="เพิ่มเติม"
                                                        onChange={this.handleChange} />
                                                    <label htmlFor="destinationOther">Other</label>
                                                </div >
                                                <h5>ADDITIONAL SERVICES</h5>
                                                <from action="#" required onChange={this.handleChange}> 
                                                <p>
                                                    <label>
                                                        <input type="checkbox" id="additionalServicePurchase" />
                                                        <span>Purchase Service</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label>  
                                                        <input type="checkbox" id="additionalServiceRoundTrip"/>
                                                        <span>Round Trip</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label>
                                                        <input type="checkbox" id="additionalServiceFoodDelivery" />
                                                        <span>Food Delivery</span>
                                                    </label>
                                                </p>
                                                </from>
                                                <button className="btn grey " >Submit</button>
                                            </form>
                                        </Col>
                                    </FormGroup>
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
