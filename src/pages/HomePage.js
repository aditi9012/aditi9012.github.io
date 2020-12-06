import React from 'react';
import Main from '../components/Main';
import Carousel from '../components/Carousel';
import Carousel1 from '../components/ControlledCarousel';
import Flipcard from '../components/Flipcard';
import Contact from '../components/Contact';
function HomePage(props){
return (
<div className="bground-b">
<div className="bb1">
    <Main title={props.title} subTitle={props.subTitle} text={props.text}/>
</div>
<Carousel/>
<Carousel1/>
<Flipcard/>
<Contact/>


</div>
);

}
export default HomePage;