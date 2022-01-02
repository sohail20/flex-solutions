import React from "react";
import { Link } from "react-router-dom";
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
                The FLEX Solutions seek to provide ‘A Gateway to ‘Easier Life for All’ through inclusive activities and services. The FLEX SOLUTIONS is originated for easier life with quality of service as it encourages convenient choices, through an inclusive range of core services providing opportunities for all to utilize the time wisely, informed by local social need, with a focus on:
                <ol>
                  <li>COMMUNITY:
                    Providing opportunities to feel valued and be part of a welcoming community
                  </li>
                  
                  <li>
                  WELL-BEING
                  Offering 'time value' solutions to encourage smooth flow of time management within budgets.
                  </li>

                  <li>
                  LEARNING 
                  Accessible learning and sign posting for personal and group development
                  </li>
                  
                  <li>
                  EMPLOYABILITY
                  Opportunities for developing real skills for real people for today’s marketplace
                  </li>
                </ol>
              </h5>
              <Link
                className="btn-round mr-1"
                color="info"
                to="/privacy-page"
                size="lg"
              >
                Learn More
              </Link>
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
