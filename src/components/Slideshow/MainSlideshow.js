import React, { Component } from 'react';
import Slideshow from './Slideshow';
import slide1 from './lumberPic.jpg';
import slide2 from './slidePic2.jpg';
import slide3 from './slidePic3.jpg';
import slide4 from './lumberPic.jpg';
import slide5 from './lumberPic.jpg';

const s = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

const slides = [slide1, slide2, slide3, slide4, slide5];

class MainSlide extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.header}> Slideshow </div>
                <div className={s.main}>
                    <Slideshow slides={slides} />
                </div>
                <div className={s.footer}>Built in React</div>
            </div>
        );
    }
}

export default MainSlide;