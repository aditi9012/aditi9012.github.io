import React from 'react';
import Content from '../components/Content';
import Main from '../components/Main';
import AditiVarshney from '../assets/images/AditiVarshney.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage(props){
return (
<div className="main-bg">
    
    <Main title={props.title} />
    <Container className="my-bg">
        <Row className="justify-content-center py-2 pd-5" >
    <Col  fluid={true} className="logo">
        <div className="div-11">
        <div className="div-1">
    <img src={AditiVarshney} width="350" height="440"/>
     </div>
     <div className="div-2">
     <p>Hi there! I am <b>Aditi varshney</b></p>

<p> A passionate programmer born and brought up in India. I am a Full Stack Web Developer with React.js,Express.js, Node.js, and MySQL as my tech stack.
    I am currently in final year of Engineering with specialization of <b>Information Technology</b> looking for the software developer role opportunities.</p>
    
 My goal is always driven towards working in a product based team and also providing amazing experience with the best level of quality and services.

I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
     </div>
     </div>
    </Col>
   
    </Row>
    </Container>
    <Content>
        
    </Content>
</div>

);

}
export default AboutPage;