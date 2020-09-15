import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Container, Col, Row, Button } from 'reactstrap';

class Contact extends Component {
    render() {
        return(
            <React.Fragment>
                <Container className='contactContainer'>
                    <Row>
                        <Col xs='6' className='contactForm'>
                        <h1>Contact</h1>
                            <Form>
                                <FormGroup>
                                    <Label for='name'>Name</Label>
                                    <Input type='name' name='name' id='name' placeholder='Your Name Here'></Input>
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