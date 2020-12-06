import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import Footer from './components/Footer';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import Carousel from 'react-bootstrap/Carousel';
import Font, { Text } from 'react-font'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:'Aditi Varshney',
      headerLinks:[
      {title:"Home",path:"/"},
      {title:"About",path:"/about"},
      {title:"Contact",path:"/contact"}
    
      ],
      home:{
        title:"Aditi Varshney",
        subTitle:"Full Stack developer",
        text:"Checkout my projects below"
      },
      about:{
        title:"About Me",
      
      }
      
    }
  }
 render(){
  return (
    <Router>
      <Container className="" fluid={true}>
      <Navbar className="border-bottom" bg="transparent" expand="lg">
        <Navbar.Brand>
          <Font family='Viga'>
        <Text family='Monoton' style={{ fontSize: 40, margin: 5 }} onLoad={() => console.log('loaded Monoton')}>
          <p>Portfolio</p>
          </Text>
        </Font>
          </Navbar.Brand>
        <Navbar.Toggle arial-control="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle">
          <Navbar className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
          
            <a href="https://drive.google.com/file/d/1pH9lcVLZsbha5P2aVPcAivwJc9LtLwn5/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button type="button" class="m-2 btn btn-outline-success">My Resume</button></a>

          </Navbar>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact render={()=><HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
      <Route path="/about"  render={()=><AboutPage title={this.state.about.title}/>}/>
      <Route path="/contact"  render={()=><ContactPage title={this.state.contact.title}/>}/>
      <Route path="/resume"  render={()=><ResumePage title={this.state.resume.link}/>}/>
      
      <Footer/>
      </Container>
      
    </Router>
    );
 }
}

export default App;
