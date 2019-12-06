import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";

import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
let iconStyle = {
  marginRight: "2rem",
  color: "DodgerBlue"
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
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
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
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
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
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>

                <Container>
                  <Row
                    style={{
                      marginLeft: "5%",
                      marginRight: "5%",
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
                      <h4>
                        Over the years, we've learned what makes a successful
                        partnership between a cleaning company and a facility
                        administrator. We know the stresses, pressure, and work
                        required to upkeep the cleanliness and pristine image of
                        your facility.
                        <br />
                        <br /> For over 40 years ECS, has been committed to
                        providing the upmost professional commercial cleaning
                        experience in town. We don't just say it, we guarantee
                        it!
                        <br />
                        <br /> We're a family-owned business, not a franchise.
                        We don't treat you like just "another account". To us,
                        you're our business partner.
                      </h4>
                      <Button>Request A FREE Quote</Button>
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
                      <h4>
                        <i
                          style={iconStyle}
                          className="fas fa-check-square"
                        ></i>
                        <strong>Available 24/7/365</strong>
                        <br />
                        <br /> We're fully staffed to handle your requests and
                        concerns at any time!
                        <br />
                        <br />{" "}
                        <i
                          style={iconStyle}
                          className="fas fa-check-square"
                        ></i>{" "}
                        No Long-Term Contracts
                        <br />
                        <br /> We earn your business and loyalty through our
                        work!
                        <br />
                        <br />{" "}
                        <i
                          style={iconStyle}
                          className="fas fa-check-square"
                        ></i>{" "}
                        Registered & Bonded to service any job!
                        <br />
                        <br /> We're a local family-owned cleaning company ready
                        to handle any job!
                        <br />
                        <br />{" "}
                        <i
                          style={iconStyle}
                          className="fas fa-check-square"
                        ></i>{" "}
                        Certified & Trained Staff <br />
                        <br /> Our staff goes through rigorous screening &
                        training to ensure the highest service to our clients!
                        <br />
                        <br />
                      </h4>
                      <img
                        // style={{ marginLeft: "2rem" }}
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
