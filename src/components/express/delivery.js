import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deliveryExpress } from '../../store/actions/deliveryActions'
import { Redirect } from 'react-router-dom'

import { Form, FormGroup, Label, Input, FormText, } from 'reactstrap';
import { Container, Col, Row, Toast, ToastBody, ToastHeader, CustomInput } from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';
import { Media } from 'reactstrap';

import { useState } from 'react';
import { Button, Fade } from 'reactstrap';



class delivery extends Component {
    state = {
        name: '',
        PhoneNumber: '',
        other: '',
        destinationName: '',
        destinationPhoneNumber: '',
        destinationOther: '',
        routePickup: '',
        routeDropoff: ''
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
        this.props.history.push('/frong');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />


        return (
            <div className="container">
                <div className="col-12">
                    <Card>
                        <CardBody>
                            <FormGroup row>
                                <Col sm={12}>
                                    <form className="white" onSubmit={this.handleSubmit}>
                                        <Card>
                                            <CardBody>
                                                <h1 class="card-title"><dt>KMITL Delivery Service</dt></h1>
                                                <i class="large material-icons" >content_paste</i>
                                                <p class="card-text">โปรดเลือกช่องทางในการส่งสินค้า กรอกรายละเอียดต่างๆให้ครบถ้วน พร้อมเลือกบริการเสริม
                                                โปรดตรวจสอบความถูกต้องของข้อมูลก่อนทำการยืนยัน</p>
                                            </CardBody>
                                        </Card>

                                        <div class="row center">
                                            <div class="col-sm-6" onChange={this.handleChange}>
                                                <h5 class="card-title"><dt>WALK</dt></h5>
                                                <p class="card-text">ค่าบริการเริ่มต้น 30 บาท</p>
                                                <i class="large material-icons">directions_walk</i>
                                                <br />
                                                <CustomInput type="switch" id="walkService" label="Select Walk" />
                                            </div>
                                            <div class="col-sm-6" onChange={this.handleChange}>
                                                <h5 class="card-title"><dt>MOTORCYCLE</dt></h5>
                                                <p class="card-text">ค่าบริการเริ่มต้น 50 บาท</p>
                                                <i class="large material-icons">directions_bike</i>
                                                <br />
                                                <CustomInput type="switch" id="motorcycleService" label="Select Motorcycle" />
                                            </div>
                                        </div>

                                        <h5><dt>Pick up Location</dt></h5>
                                        <select class="browser-default" id="routePickup" required onChange={this.handleChange} >
                                            <option value="" disabled selected>Choose your location</option>
                                            <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์</option>
                                            <option value="คณะสถาปัตยกรรมศาสตร์">คณะสถาปัตยกรรมศาสตร์</option>
                                            <option value="คณะวิทยาศาสตร์">คณะวิทยาศาสตร์</option>
                                            <option value="สำนักงานหอสมุดกลาง">สำนักงานหอสมุดกลาง</option>
                                            <option value="หอพักนักศึกษาสถาบันฯ">หอพักนักศึกษาสถาบันฯ</option>
                                            <option value="ศูนย์กีฬาพระจอมเกล้า">ศูนย์กีฬาพระจอมเกล้า</option>
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
                                        <h5><dt>Drop off Location</dt></h5>
                                        <select class="browser-default" id="routeDropoff" required onChange={this.handleChange} >
                                            <option value="" disabled selected>Choose your location</option>
                                            <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์</option>
                                            <option value="คณะสถาปัตยกรรมศาสตร์">คณะสถาปัตยกรรมศาสตร์</option>
                                            <option value="คณะวิทยาศาสตร์">คณะวิทยาศาสตร์</option>
                                            <option value="สำนักงานหอสมุดกลาง">สำนักงานหอสมุดกลาง</option>
                                            <option value="หอพักนักศึกษาสถาบันฯ">หอพักนักศึกษาสถาบันฯ</option>
                                            <option value="ศูนย์กีฬาพระจอมเกล้า">ศูนย์กีฬาพระจอมเกล้า</option>
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
                                        <h5 ><dt>Additional Services</dt></h5>

                                        <div class="row center">
                                            <div class="col-sm-4" onChange={this.handleChange}>
                                                <h5 class="card-title"><dt>Purchase Service</dt></h5>
                                                <i class="large material-icons">add_shopping_cart</i>
                                                <br />
                                                <CustomInput type="switch" id="additionalServicePurchase" label="Purchase Service" />
                                            </div>
                                            <div class="col-sm-4" onChange={this.handleChange}>
                                                <h5 class="card-title"><dt>Round Trip</dt></h5>
                                                <i class="large material-icons">loop</i>
                                                <br />
                                                <CustomInput type="switch" id="additionalServiceRoundTrip" label="Round Trip" />
                                            </div>
                                            <div class="col-sm-4" onChange={this.handleChange}>
                                                <h5 class="card-title"><dt>Food Delivery</dt></h5>
                                                <i class="large material-icons">local_dining</i>
                                                <br />
                                                <CustomInput type="switch" id="additionalServiceFoodDelivery" label="Food Delivery" />
                                            </div>
                                        </div>
                                        <button className="btn btn-success btn-md btn-block" >Submit</button>
                                    </form>
                                </Col>
                            </FormGroup>
                        </CardBody>
                    </Card>

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