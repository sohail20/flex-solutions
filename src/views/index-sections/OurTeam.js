import React from 'react';
// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
  } from "reactstrap";
function OurTeam(props) {
    const {data} = props
    return (
        <div className="section section-team text-center" id="OurTeam">
        <Container>
          <h2 className="title">Here is our team</h2>
          <div className="team">
            <Row>

              {
                data.map((val)=>(

                <Col md="4" key={val.id}>
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg")}
                    ></img>
                    <h4 className="title">{val.name}</h4>
                    <p className="category text-info">{val.title}</p>
                    <p className="description">
                      {
                        val.des===""?`You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          links
                        </a>{" "}
                        for people to be able to follow them outside the site.`:val.des
                      }
                      
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href={val.twitter}
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href={val.insta}
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href={val.facebook}
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>


                ))
              }
              
            </Row>
          </div>
        </Container>
      </div>
    );
}



{/* <Col md="4">
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
</Col> */}
export default OurTeam;