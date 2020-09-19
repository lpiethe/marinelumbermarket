import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Container, Col, Row, Button } from 'reactstrap';

class Contact extends Component {
    render() {
        return(
            <React.Fragment>
                <Container className='contactContainer' fluid>
                    <Row>
                        <Col className='contactHeader'>
                        <h1>Contact Us</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='contactAddress'>
                        <h1>Marine Lumber Market</h1>
                        <hr></hr>
                        <p><strong>Address</strong>
                        <br></br>525 South Chicago Street
                        <br></br>Seattle, WA 98101</p>

                        <p><strong>Phone Number</strong>
                        <br></br>425-251-8010</p>
                        </Col>
                   </Row>
                   <Row className='formContainer'>
                        <Col xs='6' >
                            <Form>
                                <FormGroup >
                                    <Label for='name'>Name</Label>
                                    <Input type='name' name='name' id='name'></Input>
                                    <Label for='phoneNumber'>Phone Number</Label>
                                    <Input type='phoneNumber' name='phoneNumber' id='phoneNumber'></Input>
                                    <Label for='inquiryReason'>Reason for Inquiry</Label>
                                    <Input type='textarea' name='text' id='inquiryReason'></Input>
                                    <Button>Submit</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Contact;