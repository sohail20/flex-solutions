import React,{useEffect, useState} from "react";
import { Document, Page, pdfjs } from 'react-pdf';

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";



// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import SimpleTable from "components/Tables/Tables";


import filePDF from "../../assets/pdf/Sohail'sResume.pdf"
import { useHistory } from "react-router";
import Issue from "views/index-sections/Issue";
import axios from "axios";
import swal from "sweetalert";
import config from "config";


function ProfilePage() {
  const [pills, setPills] = useState("2");
  const [file, setFile] = useState(filePDF);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [Data, setData] = useState([]);
  const history = useHistory()
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    axios.get("appointment",config)
    .then((res)=>{
      setData(res.data.app)
    })
    .catch((err)=>{
      swal("Alert!",err.message,"warning")
    })
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const Header = [
    {
      title:"Name",
      style:""
    },
    {
      title:"Date Of Apponintment",
      style:"text-right"
    }
    ,
    {
      title:"Message",
      style:"text-right"
    },
    {
      title:"Actions",
      style:"text-right"
    }
  ]
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader data={Data}/>
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Follow
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Follow me on Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Instagram
              </UncontrolledTooltip>
            </div>
            <h3 className="title">About me</h3>
            <h5 className="description">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons business_badge"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons ui-1_calendar-60"></i>
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem> */}
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                      <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={console.error}
                      >
                        <Page pageNumber={pageNumber} />
                      </Document>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10" >
                    <Row className="collections" >
                      <Col md="2" >
                        <Button onClick={()=>{
                          history.push("/appointment-page")
                        }}>New Appointment</Button>
                      </Col>
                      <SimpleTable data={Data} header={Header}/>
                    </Row>
                    

                  </Col>
                </TabPane>
                {/* <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane> */}
              </TabContent>
            </Row>
          </Container>
        </div>
        <Issue/>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
