import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import image1 from '../measurePic.jpg';
import image2 from '../measurePic.jpg';
import image3 from '../measurePic.jpg';
import image4 from '../measurePic.jpg';

class AliceSlideshow extends Component {
    render() {
        return(
            <div>
<AliceCarousel 
    autoPlay 
    autoPlayInterval="3000"
    autoPlayDirection="rtl"
    autoPlay={true}
    fadeOutAnimation={true}
    mouseTrackingEnabled={true}
    disableAutoPlayOnAction={true}
    >
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimg"/>
      <img src={image3} className="sliderimg"/>
      <img src={image4} className="sliderimg"/>
</AliceCarousel>
            </div>
        );
    }
}

export default AliceSlideshow;