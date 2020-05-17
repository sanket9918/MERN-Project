import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Container, Col, Row, InputGroup, InputGroupText, Input, Form, Card, CardBody, CardHeader, FormGroup, Button, InputGroupAddon } from 'reactstrap'

import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <>  <div>
        <section className="section section-lg section-shaped" >
          <div className="shape shape-style-1 shape-default-login">

          </div>
          <Container className="py-md">
            <Row className="justify-content-end">

              <Col lg='8'>
                <span className='hero-main-text normal'>
                  You can proceed to the next step after signing in.
                            </span>

              </Col>



              <Col lg='4' className='mb-lg-auto'>
                <div className="center-tag">

                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="pb-1" style={{ backgroundColor: "#1D8257" }}>
                      <div className="text-muted text-center mb-3" >
                        <h4 className="text-white">Login</h4>
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
                              placeholder="Email"
                              onChange={this.onChange}
                              value={this.state.email}
                              error={errors.email}
                              id="email"
                              type="email"
                              className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                              })}
                            // onFocus={e =>
                            //     this.setState({ emailFocused: true })
                            // }
                            // onBlur={e =>
                            //     this.setState({ emailFocused: false })
                            // }
                            />
                          </InputGroup>
                        </FormGroup>
                        <span className="red-text"
                          style={
                            {
                            color:'red'
                          }
                        }>
                          {errors.email}
                          {errors.emailnotfound}
                        </span>
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
                                invalid: errors.password || errors.passwordincorrect
                              })}

                            // onFocus={e =>
                            //     this.setState({ passwordFocused: true })
                            // }
                            // onBlur={e =>
                            //     this.setState({ passwordFocused: false })
                            // }
                            />
                          </InputGroup>
                        </FormGroup>
                        <span className="red-text"  style={
                            {
                            color:'red'
                          }
                        }>
                          {errors.password}
                          {errors.passwordincorrect}
                        </span>
                        <div className="text-center">
                          {/* <Link to='/overview'> */}
                          <Button
                            className="my-4"
                            type="submit"
                          >
                            Sign in
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
        










        {/* -------------------------------------- */}

        

        </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
