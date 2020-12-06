import React from 'react';
import Ecommerce from '../assets/images/Ecommerce.png';
import CourseSystem from '../assets/images/CourseSystem.png';
import BreakOutGame from '../assets/images/BreakOutGame.png';
import SubmitForm from '../assets/images/SubmitForm.png';
import TipCalculator from '../assets/images/TipCalculator.png';
import ToDoList from '../assets/images/ToDoList.jpg';
import Card from '../components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component{
   constructor(props){
       super(props);
       this.state={
         items:[
             {
                 id:0,
                 title:'ShoppingBuzzz',
                 subTitle:'E-Commerce',
                 imgSrc:Ecommerce,
                 link:'https://github.com/aditi9012/E_Commerce',
                 selected:false
             },
             {
                id:1,
                title:'Course Management System',
                subTitle:'CRUD APIs',
                imgSrc:CourseSystem,
                link:'https://github.com/aditi9012/user-Auth',
                selected:false
            },
            {
                id:2,
                title:'2D BreakOut',
                subTitle:'Pure js Game',
                imgSrc:BreakOutGame,
                link:'https://github.com/aditi9012/2D-BreakOut-Game',
                selected:false
            },
            {
                id:3,
                title:'Registration Form',
                subTitle:'Proper Form Validations',
                imgSrc:SubmitForm,
                link:'https://github.com/aditi9012/Submit-Form',
                selected:false
            },
            {
                id:4,
                title:'Tip Calculator',
                subTitle:'Tip calulator',
                imgSrc:TipCalculator,
                link:'https://github.com/aditi9012/Tip-Calculator',
                selected:false
            },
            {
                id:5,
                title:'To Do List',
                subTitle:'To Do List',
                imgSrc:ToDoList,
                link:'https://github.com/aditi9012/to-do-list',
                selected:false
            }

         ]
       }
   }

   handleCardClick=(id,card)=>{
       let items=[...this.state.items];
       items[id].selected=items[id].selected?false:true;
       items.forEach(item=>{
           if(item.id !==id){
               item.selected=false;
           }
       });
       this.setState({
          items
       });
   }

   makeItems=(items)=>{
       return items.map(item=>{
           return <Card item={item} click={(e=>this.handleCardClick(item.id,e))} key={item.id}/>
       })
   }
   render(){
       return(
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}

            </Row>

        </Container>
       );
   }
}

export default Carousel;