import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import images from './../assets/images/doctors/doctors-1.jpg'
import image from './../assets/images/doctors/doctors-2.jpg'

const About = () => {
  return (
    <div>
      <Container>
        <Zoom>
          <h2 className="text-center text-primary mb-4">
          Finding child care just got easier.
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-primary">About Us</h5>
              <p className="text-muted">
              A cornea transplant is an operation to remove all or part of a damaged cornea and replace it Laser surgery is a type of surgery that uses a laser to cut tissue. Examples include the use of The act of performing surgery may be called a surgical procedure, operation, In this context, The cornea is the transparent front part of the eye that covers the iris, pupil. Along with thet
              </p>
              <p className="text-muted">
              A cornea transplant is an operation to remove all or part of a damaged cornea and replace it Laser surgery is a type of surgery that uses a laser to cut tissue. Examples include the use of The act of performing surgery may be called a surgical procedure, operation, In this context, The cornea is the transparent front part of the eye that covers the iris, pupil. Along with thet
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-primary">Our Vision</h5>
              <p className="text-muted">
              surgery that uses a laser to cut tissue. Examples include the use of The act of performing surgery may be called a surgical procedure, operation, In this context, The cornea is the transparent front part of the eye that covers the iris, pupil.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
              A cornea transplant is an operation to remove all or part of a damaged cornea and replace it Laser surgery is a type of surgery that uses a laser to cut tissue. Examples include the use of The act of performing surgery may be called a surgical procedure, operation, In this context, The cornea is the transparent front part of the eye that covers the iris, pupil. Along with thet
              </p>
            </Bounce>
          </Col>
        </Row>
 
        <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-12">
             <img style={{width:'150px',height:'150px', borderRadius:'50%'}} src={images}alt="" />
             <h5>Dotor: Nazmul Islam </h5>
             <p>The Red House Is An Excellent CQC Registered Nursing Home. Very Best Individual Care.
             43 Skinners Lane, Ashtead
             +44 1372 274552</p>
            </div>
            <div className="col-sm-6 col-12">
            
             <img style={{width:'150px',height:'150px', borderRadius:'50%'}} src={image}alt="" />
             <h5>Dotor: Farzana Shathi</h5>
             <p>The Red House Is An Excellent CQC Registered Nursing Home. Very Best Individual Care.
             43 Skinners Lane, Ashtead
             +44 1372 274552</p>
            </div>
          
          </div>
        </div>
      </div>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>

     
    </div>
  );
};

export default About;
