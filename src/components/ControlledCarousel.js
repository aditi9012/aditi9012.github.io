import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import Javascript from '../assets/images/Javascript.png';
import ReactJs from '../assets/images/ReactJs.jpg';
import NodeJs from '../assets/images/NodeJs.png';
import MySQL from '../assets/images/MySQL.png';
import HtmlCss from '../assets/images/HtmlCss.png';
import Postman from '../assets/images/Postman.jpg';
import Git  from '../assets/images/Git.png';



function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="justify-content-center py-5 pd-5 slide-bg-img">
          <p className="technologies">Tools & Technologies</p>
        <Carousel.Item>
          <img className="slide-img" src={ReactJs} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slide-img" src={Javascript} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slide-img" src={NodeJs} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slide-img" src={MySQL} alt="Fourth slide"/>
  
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slide-img" src={HtmlCss} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slide-img" src={Git} alt="Sixth slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slide-img" src={Postman} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;