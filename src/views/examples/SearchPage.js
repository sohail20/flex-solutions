import React,{useState} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Issue from "views/index-sections/Issue";

function SearchPage() {
  const [firstFocus, setFirstFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const history = useHistory()
  const validation = ()=>{
    if(Email&&Password){
        axios.post("login",{
          email:Email,
          password:Password
        }).then((res)=>{
            if(res.data.user){
              localStorage.setItem("hospitalAppToken",res.data.token)
              history.push("/index");
            }
        }).catch((err)=>{
            swal("Alert!",err.message,"warning")
        })
    }
  }

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/hall1.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/logo.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i class="fa fa-search" aria-hidden="true"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Search"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange = {(val)=>{
                          setEmail(val.target.value)
                        }}
                      ></Input>
                    </InputGroup>
                   
                  </CardBody>
                 
                </Form>
              </Card>
            </Col>
            
          </Container>
        </div>
        <Issue/>
        <TransparentFooter />
      </div>
    </>
  );
}

export default SearchPage;
