import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Container, Col, Row ,Button} from 'reactstrap'
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

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
                    <b>Hey there,</b> {user.name.split(" ")[0]}
                  </span><br />
                  <p className="flow-text grey-text text-white">
                    You are logged into a full-stack{" "}
                    <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
                </div>
                <div className='center-tag'>
                <Button


                  onClick={this.onLogoutClick}
                  className="my-4"
                >
                    Logout
            </Button></div>



              </Col>
            </Row>
          </Container>
        </section>
      </div>












    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
