import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

const Contact = () => {
  return (
    <div >
      <ContactForm />
    </div>
  );
};
const formStyle = { background: "transparent", color: "white" };
function ContactForm() {
  return (
    <div style={{ padding: "58px 0 40px" }}>
      <Bounce right>
        <h2 className="text-center text-white">Contact Us</h2>
      </Bounce>

      <Bounce left>
        
        <h3 className="text-center text-muted mb-4">
          Your Contats page
        </h3>
      
      </Bounce>
      <div>
        <Container>
          <Slide bottom>
            <Form>
              <Row>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicText"
                  >
                    <Form.Label>Your Name </Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Your Email </Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Control
                style={formStyle}
                className="my-3"
                type="text"
                placeholder="Write Your Subject..."
              />
              <Form.Group
                className="mb-3 text-white"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Messages</Form.Label>
                <Form.Control
                  style={formStyle}
                  placeholder="Write you message..."
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button className="mb-5 px-4" variant="info" type="submit">
                Submit
              </Button>
            </Form>
          </Slide>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
