import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "gatsby";
import FontAwesome from "react-fontawesome";
import { Helmet } from "react-helmet";
// import "./fontawesome.css";
// import { Button } from "react-bootstrap";

import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
let iconStyle = {
  color: "#0072bc",
  marginRight: ".5rem"
};

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Helmet>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow: "#0072bc 0.5rem 0px 0px, #0072bc -0.5rem 0px 0px",
            backgroundColor: "#0072bc",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: "#0072bc 0.5rem 0px 0px, #0072bc -0.5rem 0px 0px",
            backgroundColor: "#0072bc",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle" style={{ textAlign: "justify" }}>
                      {mainpitch.description}
                    </h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <h3 style={{ textAlign: "justify" }}>{description}</h3>
                  </div>
                </div>

                <Container style={{ margin: "auto" }}>
                  <Row
                    style={{
                      // backgroundColor: "blue",
                      width: "100%",
                      overflow: "auto",
                      color: "white",
                      height: "auto",
                      border: ".4rem dotted black"
                    }}
                  >
                    <Col
                      xs={12}
                      md={6}
                      style={{
                        width: "48%",

                        float: "left",
                        padding: "2rem"
                      }}
                    >
                      <h1>100% Risk-Free Cleaning Services</h1>
                      <h4 style={{ textAlign: "justify" }}>
                        Over the years, we've learned what makes a successful
                        partnership between a cleaning company and a facility
                        administrator. We know the stresses, pressure, and work
                        required to upkeep the cleanliness and pristine image of
                        your facility.
                        <br />
                        <br /> For over 30 years PCM, has been committed to
                        providing the upmost professional commercial cleaning
                        experience in town. We don't just say it, we guarantee
                        it!
                        <br />
                        <br /> We're a family-owned business, not a franchise.
                        We don't treat you like just "another account". To us,
                        you're our business partner.
                      </h4>

                      <Link to="/contact">
                        <Button
                          className="btn btn-secondary"
                          style={{
                            marginLeft: "5.125rem",
                            marginTop: "1rem",
                            color: "white",
                            backgroundColor: "#0072bc",
                            boxShadow: "inset 0 0 0 2px #0072bc"
                          }}
                        >
                          Request A FREE Quote
                        </Button>
                      </Link>

                      <h2>
                        {" "}
                        <a
                          href="tel:+12067417626"
                          style={{
                            position: "fixed",
                            right: "0px",
                            bottom: "0px",
                            left: "0px",
                            height: "5rem",

                            color: "black",
                            width: "5rem"
                          }}
                        >
                          <FontAwesome
                            className="super-crazy-colors"
                            name="fas fa-phone"
                            size="2x"
                            style={{
                              color: "#22b24c",
                              padding: "1rem"
                            }}
                          ></FontAwesome>
                          Call Now
                        </a>
                      </h2>
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      style={{
                        width: "48%",
                        float: "left",
                        // backgroundColor: "black",
                        display: "inline",
                        padding: "2rem"
                      }}
                    >
                      <h4 style={{ textAlign: "justify" }} d>
                        <FontAwesome
                          className="super-crazy-colors"
                          name="check-square"
                          size="lg"
                          style={iconStyle}
                        />
                        <strong>Available 24/7/365</strong>
                        <br />
                        <br /> We're fully staffed to handle your requests and
                        concerns at any time!
                        <br />
                        <br />{" "}
                        <FontAwesome
                          className="super-crazy-colors"
                          name="check-square"
                          size="lg"
                          style={iconStyle}
                        />{" "}
                        <strong>No Long-Term Contracts</strong>
                        <br />
                        <br /> We earn your business and loyalty through our
                        work!
                        <br />
                        <br />{" "}
                        <FontAwesome
                          className="super-crazy-colors"
                          name="check-square"
                          size="lg"
                          style={iconStyle}
                        />{" "}
                        <strong style={{ display: "inline" }}>
                          Registered & Bonded to service any job!
                        </strong>
                        <br />
                        <br /> We're a local family-owned cleaning company ready
                        to handle any job!
                        <br />
                        <br />{" "}
                        <FontAwesome
                          className="super-crazy-colors"
                          name="check-square"
                          size="lg"
                          style={iconStyle}
                        />{" "}
                        <strong>Certified & Trained Staff </strong>
                        <br />
                        <br /> Our staff goes through rigorous screening &
                        training to ensure the highest service to our clients!
                        <br />
                        <br />
                      </h4>
                      <img
                        style={{ marginLeft: "3.125rem" }}
                        src="./img/riskFree.jpeg"
                        alt="customer satisfaction logo"
                      />
                    </Col>
                  </Row>
                </Container>

                {/* <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
