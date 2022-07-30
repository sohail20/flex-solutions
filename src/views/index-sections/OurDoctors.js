import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import logo from "assets/logo.png";
const dataDumy = [
  {
    name: "Verik",
    title: "ABCDEFGH",
    des: "If you have any idea related to Venue Bazaar which can help us to improve Venue Bazaar then what are you waiting for just email us we will contact you as soon as possible",
  },
  {
    name: "Robert Volvo",
    title: "ABCDEFGH",
    des: "If you have any idea related to Venue Bazaar which can help us to improve Venue Bazaar then what are you waiting for just email us we will contact you as soon as possible",
  },
  {
    name: "Amma Survi",
    title: "ABCDEFGH",
    des: "If you have any idea related to Venue Bazaar which can help us to improve Venue Bazaar then what are you waiting for just email us we will contact you as soon as possible",
  },
];
function OurDoctors({ title = "Testimonies", data = dataDumy }) {
  return (
    <div className="section section-team text-center" id="OurDoctors">
      <Container>
        <h2 className="title">{title}</h2>
        <div className="team">
          <Row>
            {data.map((val) => (
              <Col md="4">
                <div className="team-player">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    style={{ width: 100 }}
                    src={logo}
                  ></img>
                  <h4 className="title">{val.name}</h4>
                  <p className="category text-info">{val.title}</p>
                  <p className="description">{val.des}</p>
                  <Button
                    className="btn-icon btn-round"
                    color="info"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="info"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="info"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

{
  /* <Col md="4">
<div className="team-player">
  <img
    alt="..."
    className="rounded-circle img-fluid img-raised"
    src={require("assets/img/ryan.jpg")}
  ></img>
  <h4 className="title">Ryan Tompson</h4>
  <p className="category text-info">Designer</p>
  <p className="description">
    You can write here details about one of your team members.
    You can give more details about what they do. Feel free to
    add some{" "}
    <a href="#pablo" onClick={(e) => e.preventDefault()}>
      links
    </a>{" "}
    for people to be able to follow them outside the site.
  </p>
  <Button
    className="btn-icon btn-round"
    color="info"
    href="#pablo"
    onClick={(e) => e.preventDefault()}
  >
    <i className="fab fa-twitter"></i>
  </Button>
  <Button
    className="btn-icon btn-round"
    color="info"
    href="#pablo"
    onClick={(e) => e.preventDefault()}
  >
    <i className="fab fa-linkedin"></i>
  </Button>
</div>
</Col>
<Col md="4">
<div className="team-player">
  <img
    alt="..."
    className="rounded-circle img-fluid img-raised"
    src={require("assets/img/eva.jpg")}
  ></img>
  <h4 className="title">Eva Jenner</h4>
  <p className="category text-info">Fashion</p>
  <p className="description">
    You can write here details about one of your team members.
    You can give more details about what they do. Feel free to
    add some{" "}
    <a href="#pablo" onClick={(e) => e.preventDefault()}>
      links
    </a>{" "}
    for people to be able to follow them outside the site.
  </p>
  <Button
    className="btn-icon btn-round"
    color="info"
    href="#pablo"
    onClick={(e) => e.preventDefault()}
  >
    <i className="fab fa-google-plus"></i>
  </Button>
  <Button
    className="btn-icon btn-round"
    color="info"
    href="#pablo"
    onClick={(e) => e.preventDefault()}
  >
    <i className="fab fa-youtube"></i>
  </Button>
  <Button
    className="btn-icon btn-round"
    color="info"
    href="#pablo"
    onClick={(e) => e.preventDefault()}
  >
    <i className="fab fa-twitter"></i>
  </Button>
</div>
</Col> */
}
export default OurDoctors;
