import React, {Component} from 'react';
import {Container, Col, Row, Button} from 'reactstrap';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row className='about'>
                        <Col xs='12' sm='8'>
                <h1>Marine Lumber Service, Inc + Lumber Market Inc = Knowledge and Service!!</h1>
                <p>Marine Lumber Market brings two longstanding Seattle area lumberyards together.  Founded in 1929, Marine Lumber Service started by serving Seattle’s burgeoning shipping industry with industrial products.  Through the years “MLS” grew with Seattle into a stocking wholesale distributor and remanufacturing facility of all types of lumber and panel products.  Lumber Market, Inc started up in 1923 in Renton, WA providing all types of building materials to contractors and industrial users for over 90 years!

 

The two companies have joined together to form a unique lumberyard stocking a wide variety lumber, panels, and building materials.  We also provide an onsite remanufacturing facility where we can rip, trim, plane, and resaw just about anything we stock to your custom needs.</p>
                        </Col>
                    </Row>
                    <Row className='aboutQuote'>
                        <h4>Request a Free Quote</h4>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default About;