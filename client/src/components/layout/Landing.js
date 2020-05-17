import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, InputGroup, InputGroupText, Input, Form, Card, CardBody, CardHeader, FormGroup, Button, InputGroupAddon } from 'reactstrap'

class Landing extends Component {
  render() {
    return (

      <div>
        <section className="section section-sm section-shaped" >
          <div className="shape shape-style-1 shape-default">

          </div>
          <Container className="py-md">
            <Row className="row-grid justify-content-between align-items-center">
              <Col>
                <div className="center-tag">
                  <span className="hero-main-text heading1">
                    Smart App
                            </span><br />
                  <span className="hero-main-text other">
                    One sample application
                            </span>
                </div>

               
                  
               
              </Col>
            </Row>
            <Row className='justify-content-between'>
              <div className='center-tag'>
              <Col> 
                <Link
                  to="/register"
                
                >
                  <Button
                      className='my-4'
                      style={{ margin: "2em" }}
                  >Register</Button>

                </Link>


                <Link
                  to="/login"

                ><Button
                      className='my-4'
                      style={{ margin: "2em" }}
                >Login
                  </Button>

                </Link>
                </Col>
              </div>
            </Row>
          </Container>
        </section>


      </div>
    )
  }
}

export default Landing;
