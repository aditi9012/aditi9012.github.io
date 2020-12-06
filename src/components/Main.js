import React from 'react';
import  Container  from 'react-bootstrap/Container';
import  Jumbotron  from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Main(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
          <Container fluid={true}>
              <Row className="justify-content-center py-5">
                  <Col md={12} sm={10}>
                    { props.title && <h2 className="display-1 font-weight-bolder">{props.title}</h2>}
                    { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                    { props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                  </Col>
              </Row>
          </Container>
        </Jumbotron>
    );
}
export default Main;