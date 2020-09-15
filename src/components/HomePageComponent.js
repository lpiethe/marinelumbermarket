import React, {Component} from 'react';
import { Container, Col, Row } from 'reactstrap';
import MainSlide from './Slideshow/MainSlideshow';


class Home extends Component {
    render() {
        return(
            <React.Fragment>
        
               
                <Container fluid className='homePage2'>
                    <Row className='homePage3'>
                    <Col>
                        <img src={require("../measurePic.jpg")} width='700'/>
                        </Col>
                        <Col>
                        <h1>MARINE LUMBER MARKET</h1>
                        <p>Marine Lumber Market is a full service Lumber and Building materials wholesale distributor, remanufacturer, and stocking retail yard.  Operating from our plant in South Park, we serve a wide variety of customers from small independent contractors to some of the largest industrial users in the Northwest.  We source directly from the manufacturer and specialize in having a wide variety of lumber products in stock including marine grade treated lumber, large hardwood and softwood timbers, industrial products, and unique specialty hardware.  Conveniently located near down town Seattle we can deliver most orders the same day!
                                <br></br>
                             All Over the Northwest with Service you can count on! </p>
                        </Col>
                    </Row>
                    <Row className='homePage2'>
                        <Col xs='8' mx auto>
                            <h1>ALL OVER THE NORTHWEST</h1>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='homePage'>
                    <Row className='homePage'>
                        <Col xs='12' sm='6' mx-auto>
                            <h1>MARINE LUMBER MARKET</h1>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;