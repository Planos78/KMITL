import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deliveryExpress } from '../../store/actions/deliveryActions'
import { Redirect } from 'react-router-dom'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
        destinationOther: ''
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
                                                </div>
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
                                                <button className="btn pink lighten-1" >Save</button>
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
