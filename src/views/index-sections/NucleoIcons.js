import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">About Us</h2>
              <h5 className="description">
              Shadi Compare is a platform where you can advertise your Venue details in reasonable price, you can also show your Venues images, Location, facilities and booking dates.

               Here you can also find Venues with ease, either it is for hangout or any family event
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="/nucleo-icons"
                size="lg"
                target="_blank"
              >
                Learn More
              </Button>
              <Button
                className="btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="lg"
                target="_blank"
              >
                Visit our blog
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons ui-2_favourite-28"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons travel_istanbul"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
