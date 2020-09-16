import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import image1 from '../measurePic.png';
import image2 from '../chemonite.png';
import image3 from '../measurePic.jpg';
import image4 from '../measurePic.jpg';
import { Container } from 'reactstrap';

class AliceSlideshow extends Component {
    render() {
        return(
            <Container fluid>
<AliceCarousel 
    autoPlay 
    autoPlayInterval="2000"
    autoPlayDirection="rtl"
    autoPlay={true}
    fadeOutAnimation={true}
    mouseTrackingEnabled={true}
    disableAutoPlayOnAction={true}
    buttonsDisabled={true}
    dotsDisabled={true}
    >
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimg"/>
      <img src={image3} className="sliderimg"/>
      <img src={image4} className="sliderimg"/>
</AliceCarousel>
            </Container>
        );
    }
}

export default AliceSlideshow;