import React from 'react';
import CardInfo from '../components/CardInfo';
import  Component from 'react'
 
import Card from 'react-animated-3d-card';
import Card2 from 'react-animated-3d-card';

function Card1(props){
return(
    <div>
    <Card2  style={{
        backgroundColor:'transparent'
      }}>
    <div className="d-inline-block g-card" onClick={(e)=>props.click(props.item)}>
    <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/> 
    
    </div>

    </Card2>
    <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>
    </div>
   
);
}

// class Example extends Component {
//     render() {
//       return <Card       
//         style={{
//           backgroundColor: 'red',
//           width: '450px',
//           height: '300px',
//           cursor: 'pointer'
//         }}
//         onClick={() => console.log('Card clicked')}
//       />
//     }
//   }


export default Card1;