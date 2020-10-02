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
                        <Col className='contactAddress'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.8185567722585!2d-122.32936154896193!3d47.53239537907765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490418663de0afd%3A0xa2e9015fa45bd2d7!2s525%20S%20Chicago%20St%2C%20Seattle%2C%20WA%2098108!5e0!3m2!1sen!2sus!4v1601656310958!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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