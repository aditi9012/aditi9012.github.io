import React from 'react';
import ReactCardFlip from 'react-card-flip';
import ReactCardFlip1 from 'react-card-flip';

class Flipcard extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false,
        isFlipped1:false
      };
      this.handleClick = this.handleClick.bind(this);
      
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
 
   
    render() {
      return (
        <div>
            <p className="technologies">Internships</p>
       <div className="card-flip py-5 pd-5">
           
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" className="card-flip-1">
          <div className="flip-card">
            <p className="h-2">OSI Car Rental</p>
            <p className="h-1">(05/2020-06/2020)</p>
            <p className="h-1"> <a href="https://github.com/aditi9012/OSI_carrental" className="h-1">Github</a></p>
            <p className="h-1"><button onClick={this.handleClick} className="h-1">Read More</button></p>
          </div>
   
          <div className="flip-card1">
            <p className="h-1">Worked on the frontend part as an intern on project OSI Car Rental</p>
            <p className="h-1">Designed web pages in html,css,javascript and flex</p>
           
            <button onClick={this.handleClick} className="h-1">Back</button>
          </div>
          
        </ReactCardFlip>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" className="card-flip-2">
        <div className="flip-card">
        <p className="h-2">Ultimate Shark</p>
        <p className="h-1">(06/2019-08/2019)</p>
        <p className="h-1"><a href="https://github.com/ultimateshark/MyParliament" className="h-1">Github</a></p>
        <p className="h-1"> <button onClick={this.handleClick} className="h-1"> Read More</button></p>
        </div>
 
        <div className="flip-card1">
        <p className="h-1">Worked as an intern (frontend developer) in a startup under my seniors .</p>
        <p className="h-1">Designed web pages in html,css,javascript,flex.</p>
        

          <button onClick={this.handleClick} className="h-1">Back</button>
        </div>
        
      </ReactCardFlip>
      </div>
      </div>
        
      )
    }
  }
  export default Flipcard;