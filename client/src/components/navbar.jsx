import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    // Button,
    UncontrolledCollapse,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class Navbar1 extends Component {
    // componentDidMount() {
    //   // let headroom = new Headroom(document.getElementById("navbar-main"));
    //   // headroom.init()
    // }
    render() {
        return (
            <div>
                <header className="header-global">
                    <Navbar
                        className="navbar-main  navbar-light headroom"
                        expand="lg"
                        id="navbar-main"
                        style={{
                            backgroundColor: "#1d8257",
                           
                        }}
                    >  
                        <Container>
                          
                            <NavbarBrand className="mr-lg-5" ><Link to='/'>
                                
                                    <h3 className="text-white"><b>Sample App</b></h3>
                               </Link>
                               
                                </NavbarBrand>
                            {/* <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon" />
                            </button> */}
                            <UncontrolledCollapse navbar toggler="#navbar_global">
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">

                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span />
                                                <span />
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                               
                            </UncontrolledCollapse>
                            </Container>
                        
                    </Navbar>
                </header>
            </div>          
                               

        )
    }
}

export default Navbar1