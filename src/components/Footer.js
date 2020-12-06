import React from 'react';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
  
    return(
          <footer className="h-3">
           <Container fluid={true}>
           <Row className="border-top justify-content-between p-3">
              <Col className="p-0" md={12} sm={12}>
                Aditi Varshney 2020
              </Col>
              {/* <Col className="p-0 d-flex justify-content-end" md={3}>
                  Thats' All
              </Col> */}

           </Row>
           </Container>
          </footer>
    );
}
export default Footer;