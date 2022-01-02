import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Issue from "views/index-sections/Issue";
import SpecialitiesHeader from "components/Headers/SpecialitiesHeader";

function Halls() {
  
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <SpecialitiesHeader title="Get your desired hall" />
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Top Rated Halls</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/placeholder.png")}
                    ></img>
                    <h4 className="title">Title 1</h4>
                    <p className="category text-info">Subtitle 1</p>
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
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/placeholder.png")}
                    ></img>
                    <h4 className="title">Title 2</h4>
                    <p className="category text-info">Subtitle 2</p>
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
                      className="img-fluid img-raised"
                      src={require("assets/placeholder.png")}
                    ></img>
                    <h4 className="title">Title 3</h4>
                    <p className="category text-info">Subtitle 3</p>
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
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center" id="issue">
          <Container>
            <h2 className="title">Search your destiny</h2>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (true ? " input-group-focus" : "")
                  }
                >
                  <Input
                    placeholder="City Name..."
                    type="text"
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (true ? " input-group-focus" : "")
                  }
                >
                  <Input
                    placeholder="Area"
                    type="text"
                  ></Input>
                </InputGroup>                
              </Col>

              <Col className="text-center ml-auto mr-auto" lg="6" md="8">                
                <InputGroup
                  className={
                    "input-lg" + (true ? " input-group-focus" : "")
                  }
                >
                  <select style={{width:"100%",borderRadius:30,padding:13,opacity:0.5}}>
                    <option>
                      -Persons-
                    </option>
                    <option>
                      200-300
                    </option>
                    <option>
                      300-500
                    </option>
                  </select>
                </InputGroup>

                <InputGroup
                  className={
                    "input-lg" + (true ? " input-group-focus" : "")
                  }
                >
                  <select style={{width:"100%",borderRadius:30,padding:13,opacity:0.5}}>
                    <option>
                      -Select Price-
                    </option>
                    <option>
                      20000-30000
                    </option>
                    <option>
                      30000-50000
                    </option>
                  </select>
                </InputGroup>              
              </Col>
              <Col className="text-center ml-auto mr-auto" lg="4" md="4"></Col>                

                <Col className="text-center ml-auto mr-auto" lg="4" md="4">                
                  <div className="send-button">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      size="lg"
                    >
                      Search
                    </Button>
                  </div>
                </Col>

              <Col className="text-center ml-auto mr-auto" lg="4" md="4"></Col>                

            </Row>
            
          </Container>
        </div>
        <Issue/>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Halls;
