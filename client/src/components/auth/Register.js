import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Container, Col, Row, InputGroup, InputGroupText, Input, Form, Card, CardBody, CardHeader, FormGroup, Button, InputGroupAddon } from 'reactstrap'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
        

        <div>
          <section className="section section-lg section-shaped" >
            <div className="shape shape-style-1 shape-default-login">

            </div>
            <Container className="py-md">
              <Row className="justify-content-end">

                <Col lg='6'>
                  <span className='hero-main-text normal'>
                    Please <b>register</b> on our platform to get exclusive <b>benefits</b>.
                            </span>

                </Col>



                <Col lg='6' className='mb-lg-auto'>
                  <div className="center-tag">

                    <Card className="bg-secondary shadow border-0">
                      <CardHeader className="pb-1" style={{ backgroundColor: "#1D8257" }}>
                        <div className="text-muted text-center mb-3" >
                          <h4 className="text-white">Register</h4>
                        </div>

                      </CardHeader>
                      <CardBody className="px-sm-5 py-sm-5" style={{ backgroundColor: "#1D8257" }}>

                        <Form noValidate onSubmit={this.onSubmit}>
                          <FormGroup

                          >
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Name"
                                onChange={this.onChange}
                                value={this.state.name}
                                error={errors.name}
                                id="name"
                                type="text"
                                className={classnames("", {
                                  invalid: errors.name
                                })}
                              // onFocus={e =>
                              //     this.setState({ emailFocused: true })
                              // }
                              // onBlur={e =>
                              //     this.setState({ emailFocused: false })
                              // }
                              />
                            </InputGroup>
                            <span className="red-text" style={{ color: 'red' }}>{errors.name}</span>

                          </FormGroup>
                          <FormGroup

                          >
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email"
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                className={classnames("", {
                                  invalid: errors.email
                                })}

                              // onFocus={e =>
                              //     this.setState({ passwordFocused: true })
                              // }
                              // onBlur={e =>
                              //     this.setState({ passwordFocused: false })
                              // }
                              />
                            </InputGroup>
                            <span className="red-text" style={{ color: 'red' }}>{errors.email}</span>

                          </FormGroup>
                          <FormGroup

                          >
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Password"
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className={classnames("", {
                                  invalid: errors.password
                                })}

                              // onFocus={e =>
                              //     this.setState({ passwordFocused: true })
                              // }
                              // onBlur={e =>
                              //     this.setState({ passwordFocused: false })
                              // }
                              />
                            </InputGroup>
                            <span className="red-text" style={{ color: 'red' }}>{errors.password}</span>

                          </FormGroup>

                          <FormGroup

                          >
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Confirm Password"
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                id="password2"
                                type="password"
                                className={classnames("", {
                                  invalid: errors.password2
                                })}

                              // onFocus={e =>
                              //     this.setState({ passwordFocused: true })
                              // }
                              // onBlur={e =>
                              //     this.setState({ passwordFocused: false })
                              // }
                              />
                            </InputGroup>
                            <span className="red-text" style={{color:'red'}}>{errors.password2}</span>

                          </FormGroup>
                          <div className="text-center">
                      

                              <Button
                                className="my-4"
                                type="submit"
                              >
                                Sign Up
                    </Button>
                          </div>


                        </Form>
                      </CardBody>
                    </Card>

                  </div>
                </Col>
              </Row>



            </Container>
          </section>

        </div>





        



        
        </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
