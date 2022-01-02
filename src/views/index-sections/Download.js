import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Do you love this Flex Solutions?</h3>
              <h5 className="description">
              We desire to make a platform where we can help people to find Venues in their budget and for owners who want to advertise their Venues with ease.
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round mr-1"
                color="info"
                href="#"
                role="button"
                size="lg"
              >
                Continue using our app
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href="#"
                outline
                role="button"
                size="lg"
                target="_blank"
              >
                Download 
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>Want more?</h2>
              <h5 className="description">
                We're going to launch our event planner{" "}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Event planner 
                </a>
                 in. Because Pakistan is amongst the best wedding destinations in the world without any doubt.Venue Bazaar Event Management Company takes care of your ideas, approaches and complications that you have to face before and on your wedding day. We also know that you are now short listing the venues that match your dream that you saw for your Big Day.
              </h5>
            </Col>
            <Col md="12">
              <Button
                className="btn-neutral btn-round"
                color="default"
                href="#"
                size="lg"
                disabled
              >
                <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                Upgrade to PRO
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="#"
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="#"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href="#"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Follow us
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
