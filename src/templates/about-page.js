import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Container, Row, Col, Card } from "react-bootstrap";
import { RSA_NO_PADDING } from "constants";

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  image
}) => {
  const PageContent = contentComponent || Content;
  const cardStyle = {
    width: "18rem",
    marginTop: "1.25rem",
    height: "33rem"
  };

  return (
    <Container>
      <Row>
        <Col
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            maxWidth: "130%"
          }}
        ></Col>
      </Row>
      <Row>
        <Col xs={12} md={4} style={{ marginBottom: "3.25rem" }}>
          <Card style={cardStyle}>
            <Card.Title className="text-center mt-4">About Us</Card.Title>
            <Card.Img
              style={{
                width: "13rem",
                height: "10rem",
                marginLeft: "3rem",
                marginTop: "1.125rem"
              }}
              variant="top"
              src="../img/aboutUs2.png"
              alt="something"
            />
            <Card.Body>
              <Card.Text className="text-justify">
                Peoples Choice Maintenance is a locally owned and operated
                commercial janitorial services provider. Peoples Choice has been
                serving the Puget Sound area for over 30 years.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card style={cardStyle}>
            <Card.Title className="text-center mt-4">Our Mission</Card.Title>
            <Card.Img
              variant="top"
              src="../img/missionTester1.png"
              alt="something"
              style={{
                width: "13rem",
                height: "10rem",
                marginLeft: "3rem",
                marginTop: "1.125rem"
              }}
            />
            <Card.Body>
              <Card.Text className="text-justify">
                Our mission at People's Choice Maintenance is to achieve the
                highest level of customer satisfaction and loyalty by providing
                and maintaining a clean and healthy working environment,
                responding quickly to our customer’s specific needs and
                conducting our business with uncompromising integrity.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card style={cardStyle}>
            <Card.Title className="text-center mt-4">Our Vision</Card.Title>
            <Card.Img
              variant="top"
              src="../img/vision11.png"
              alt="something"
              height="150"
              style={{
                width: "13rem",
                height: "10rem",
                marginLeft: "3rem",
                marginTop: "1.125rem"
              }}
            />
            <Card.Body>
              <Card.Text className="text-justify">
                Our vision at People's Choice Maintenance is to be recognized as
                the premier janitorial provider in the greater Seattle area of
                Washington. We strive not to be the biggest, but to be the best.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <Row>
            <Col xs={12} md={4}>
              <h3 className="text-center">About Us</h3>
              <p>
                Peoples Choice Maintenance is a locally owned and operated
                commercial janitorial services provider. Peoples Choice has been
                serving the Puget Sound area for over 30 years.
              </p>
            </Col>

            <Col xs={12} md={4}>
              <h3 className="text-center">Our Mission</h3>
              <p>
                Our mission at People's Choice Maintenance is to achieve the
                highest level of customer satisfaction and loyalty by providing
                and maintaining a clean and healthy working environment,
                responding quickly to our customer’s specific needs and
                conducting our business with uncompromising integrity.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h3 className="text-center">Our Vision</h3>
              <p>
                Our vision at People's Choice Maintenance is to be recognized as
                the premier janitorial provider in the greater Seattle area of
                Washington. We strive not to be the biggest, but to be the best.
              </p>
            </Col>
          </Row> */}
    </Container>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post);

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 3048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
