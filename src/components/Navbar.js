import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
import MediaQuery from "react-responsive";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <MediaQuery minDeviceWidth={1224}>
          <div
            style={{
              display: "flex !important",
              flexDirection: "row",
              alignItems: "flex-start"
            }}
            className="container"
          >
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img
                  src="../../img/pcmlogoonly.png"
                  alt="PCM logo"
                  style={{
                    width: "136px",
                    height: "auto",
                    padding: "0px !important"
                  }}
                />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div
                className="navbar-start has-text-centered"
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex" }}>
                  <Link className="navbar-item" to="/about">
                    About
                  </Link>
                  <Link className="navbar-item" to="/services">
                    Services
                  </Link>

                  <Link className="navbar-item" to="/contact">
                    Contact
                  </Link>
                </div>
                <div>
                  <Link to="/contact">
                    <Button
                      className="btn btn-secondary"
                      style={{
                        color: "white",
                        backgroundColor: "#0072bc",
                        boxShadow: "inset 0 0 0 2px #0072bc",
                        marginTop: "4px",
                        marginRight: "1.25rem"
                      }}
                    >
                      Request A FREE Quote
                    </Button>
                  </Link>
                  <a href="tel:+12067417626">
                    <Button
                      className="btn btn-secondary float-right"
                      style={{
                        color: "white",
                        backgroundColor: "#0072bc",
                        boxShadow: "inset 0 0 0 2px #0072bc",
                        marginTop: "4px",
                        marginRight: "1.25rem"
                      }}
                    >
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <div
            style={{
              display: "flex !important",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
            className="container"
          >
            <div className="navbar-brand" style={{ display: "flex" }}>
              <Link to="/" className="navbar-item" title="Logo">
                <img
                  src="../../img/pcmlogoonly.png"
                  alt="PCM logo"
                  style={{
                    width: "136px",
                    height: "auto",
                    padding: "0px !important"
                  }}
                />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div
                className="navbar-start has-text-centered"
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex" }}>
                  <Link className="navbar-item" to="/about">
                    About
                  </Link>
                  <Link className="navbar-item" to="/services">
                    Services
                  </Link>

                  <Link className="navbar-item" to="/contact">
                    Contact
                  </Link>
                </div>
                <div>
                  <Link to="/contact">
                    <Button
                      className="btn btn-secondary"
                      style={{
                        color: "white",
                        backgroundColor: "#0072bc",
                        boxShadow: "inset 0 0 0 2px #0072bc",
                        marginTop: "4px",
                        marginRight: "1.25rem"
                      }}
                    >
                      Request A FREE Quote
                    </Button>
                  </Link>
                  <a href="tel:+12067417626">
                    <Button
                      className="btn btn-secondary float-right"
                      style={{
                        color: "white",
                        backgroundColor: "#0072bc",
                        boxShadow: "inset 0 0 0 2px #0072bc",
                        marginTop: "4px",
                        marginRight: "1.25rem"
                      }}
                    >
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </nav>
    );
  }
};

export default Navbar;
