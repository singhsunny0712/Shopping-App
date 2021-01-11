import React from 'react';
import {Container,Row,Col  } from "react-bootstrap";

const footer=()=> {
    return (
        <div>
           <footer>
              <Container>
                  <Row>
                      <Col className="text-center">
                          <span >
                              Copyright &copy; Sunny Singh
                          </span>
                      </Col>
                  </Row>
              </Container>

           </footer>
            
        </div>
    );
}

export default footer;