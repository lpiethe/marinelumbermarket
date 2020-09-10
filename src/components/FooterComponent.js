import React, { Component } from 'react';
import {  Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid >
                    <Row className='footer'>
                        <Col xs='12' >
                            <h6>MARINE LUMBER MARKET <a href ='/contact'> CONTACT US </a></h6>
                        </Col>
                    </Row>
                    <Row className='footer2'>
                        <Col xs='12' >
                            <p><i class="fa fa-copyright" aria-hidden="true"></i>2020 by Marine Lumber Market. All rights reserved</p>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Footer;