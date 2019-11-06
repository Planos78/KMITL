import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deliveryExpress } from '../../store/actions/deliveryActions'
import { Redirect } from 'react-router-dom'

import { Form, FormGroup, Label, Input, FormText, } from 'reactstrap';
import { Container, Col, Row, Toast, ToastBody, ToastHeader, CustomInput } from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';
import { Media } from 'reactstrap';




class delivery extends Component {
    state = {
        name: '',
        PhoneNumber: '',
        other: '',
        destinationName: '',
        destinationPhoneNumber: '',
        destinationOther: '',
        routePickup: '',
        routeDropoff: '',
        additionalServicePurchase: '',
        additionalServiceRoundTrip: '',
        additionalServiceFoodDelivery: ''
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
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <div class="card">
                        <div class="card-body">
                            <div class="row">

                                <div class="col-sm-6">
                                    <div class="card">
                                        <div class="card-body">
                                                
                                                <h1 class="card-title"><dt>KMITL Delivery Service</dt></h1>
                                                <i class="large material-icons" >content_paste</i>
                                                <p class="card-text">โปรดเลือกช่องทางในการส่งสินค้า กรอกรายละเอียดต่างๆให้ครบถ้วน พร้อมเลือกบริการเสริม
                                                โปรดตรวจสอบความถูกต้องของข้อมูลก่อนทำการยืนยัน</p>
                                                
                                          
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title"><dt>1) WALK</dt></h5>
                                            <p class="card-text">ค่าบริการเริ่มต้น 30 บาท</p>
                                            <Media>
                                                <Media object data-src="holder.js/64x64" alt="" />
                                                <i class="large material-icons">directions_run</i>
                                            </Media>
                                            <button class="btn waves-effect waves-light" type="submit" name="action">เลือก
    <i class="material-icons right">send</i>
  </button>
                                        </div>
                                    </div>  
                                </div>

                                <div class="col-sm-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title"><dt>2) MOTORCYCLE</dt></h5>
                                            <p class="card-text">ค่าบริการเริ่มต้น 50 บาท</p>
                                            <Media>
                                                <Media object data-src="holder.js/64x64" alt="" />
                                                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                                                <i class="large material-icons">directions_bike</i>
                                            </Media>
                                            <button class="btn waves-effect waves-light" type="submit" name="action">เลือก
    <i class="material-icons right">send</i>
  </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-13">
                        <Card>
                            <CardBody>
                                <FormGroup row>
                                    <Col sm={12}>
                                        <form className="white" onSubmit={this.handleSubmit}>
                                            <h5>Pick up Location</h5>
                                            <select class="browser-default" id="routePickup" required onChange={this.handleChange} >
                                                <option value="" disabled selected>Choose your location</option>
                                                <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์</option>
                                                <option value="คณะสถาปัตยกรรมศาสตร์">คณะสถาปัตยกรรมศาสตร์</option>
                                                <option value="คณะวิทยาศาสตร์">คณะวิทยาศาสตร์</option>
                                                <option value="สำนักงานหอสมุดกลาง">สำนักงานหอสมุดกลาง</option>
                                                <option value="หอพักนักศึกษาสถาบันฯ">หอพักนักศึกษาสถาบันฯ</option>
                                                <option value="ศูนย์กีฬาพระจอมเกล้า">ศูนย์กีฬาพระจอมเกล้า</option>

                                                {/* 
                                                    <option value="คณะอุตสาหกรรมเกษตร">คณะอุตสาหกรรมเกษตร</option>
                                                    <option value="คณะครุศาสตร์อุตหกรรม">คณะครุศาสตร์อุตหกรรม</option>
                                                    <option value="คณะเทคโนโลยีการเกษตร">คณะเทคโนโลยีการเกษตร</option>
                                                    <option value="คณะเทคโนโลยีสารสนเทศ">คณะเทคโนโลยีสารสนเทศ</option>
                                                    <option value="อาคาร 12 ชั้น สถาบันฯ">อาคาร 12 ชั้น สถาบันฯ</option>
                                                    <option value="อาคารเรียนรวมสมเด็จพระเทพฯ">อาคารเรียนรวมสมเด็จพระเทพฯ</option>
                                                    */}


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
                                            <h5 >ADDITIONAL SERVICES</h5>
                                            <from action="#" required onChange={this.handleChange}>
                                                <p>
                                                    <label>
                                                        <input type="checkbox" id="additionalServicePurchase" />
                                                        <span>Purchase Service</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label>
                                                        <input type="checkbox" id="additionalServiceRoundTrip" />
                                                        <span>Round Trip</span>k
                                                    </label>
                                                </p>
                                                <p>
                                                    <label>
                                                        <input type="checkbox" id="additionalServiceFoodDelivery" />
                                                        <span>Food Delivery</span>
                                                    </label>
                                                </p>
                                            </from>
                                            <button className="btn btn-success btn-md btn-block" onclick="sum()">Submit</button>
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