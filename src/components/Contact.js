import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';


class Contact extends React.Component {
    render() {
      return <div className="contact-details card-flip py-5 pd-5"> 
            <p className="technologies ">Connect with Me</p>
          <div className="icon-style">
          <a href="https://github.com/aditi9012"  target="_blank"> <GitHubIcon className="g-color" style={{ fontSize: 80 }}/></a>
          </div>
          <div className="icon-style">
          <a href="https://varshneyaditi1999@gmail.com"  target="_blank"> <EmailIcon className="g-color" style={{ fontSize: 80 }}/></a>
          </div>
          <div className="icon-style" >
          <a href="https://www.youtube.com/channel/UC9yAVjRS5aDW5nebTFsqtoA?view_as=subscriber"  target="_blank"> <YouTubeIcon className="g-color" style={{ fontSize: 80 }}/></a>
          </div>
          <div className="icon-style">
          <a href="https://www.linkedin.com/in/aditi-varshney-235b5b16b/"  target="_blank"> <LinkedInIcon className="g-color" style={{ fontSize: 80 }}/></a>
          </div>
          <div className="icon-style">
          <a href="https://twitter.com/AditiVarshney10"  target="_blank"> <TwitterIcon className="g-color" style={{ fontSize: 80 }}/></a>
          </div>


          <div><a href="https://drive.google.com/file/d/1pH9lcVLZsbha5P2aVPcAivwJc9LtLwn5/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button type="button" class="m-2 btn btn-outline-success">My Resume</button></a></div>
          </div>
    }
  }

  export default Contact;