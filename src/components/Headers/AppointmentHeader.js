import React,{useContext, useState} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Container,
  Col,
  
} from "reactstrap";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import axios from "axios";
import swal from "sweetalert";
import { UserData } from "index";
import config from "config";

function AppointmentHeader(props) {
  const {DoctorData} = props
  const data = useContext(UserData)
  const [firstFocus, setFirstFocus] = useState(false);
  const [Sending, setSending] = useState(false);
  //FORM
  const [DOA, setDOA] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Doctor, setDoctor] = useState("");
  const [Contact, setContact] = useState("");
  const [Message, setMessage] = useState("");
  //FORM
  const validation = ()=>{
    
    if(Name&&Email&&Contact){
        setSending(true)
        axios.post("/appointment",{
          user_id:parseInt(data.id) ,
          doctor_id:parseInt(Doctor) ,
          name:Name,
          email:Email,
          contact:"Contact",
          doa:DOA,
          message:Message
        },config).then((res)=>{
            swal("Congrats","Details sent successfully","success")
            setSending(false)
        }).catch((err)=>{
            swal("Alert!",err.message,"warning")
            setSending(false)
        })
    }else{
      swal("Alert!","Please fill all the fields","warning")
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
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")",
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
                        src={require("assets/img/now-logo.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>


                    <div className="datepicker-container">
                        <FormGroup>
                        <Datetime
                            timeFormat={true}
                            inputProps={{ placeholder: "Datetime Picker Here" }}
                            style={{color:"#333"}}
                            onChange={(val)=>{
                                setDOA(val._d)
                            }}
                        />
                        </FormGroup>
                    </div>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input
                        placeholder="Your Name"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange = {(val)=>{
                            setName(val.target.value)
                        }}
                      ></Input>
                    </InputGroup>


                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input
                        placeholder="Your Email"
                        type="email"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange = {(val)=>{
                            setEmail(val.target.value)
                        }}
                      ></Input>
                    </InputGroup>


                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                        <select 
                            style={{backgroundColor:"transparent",width:"100%",borderRadius:20,height:40,color:"#fff"}}
                            onChange={(val)=>{setDoctor(val.target.value)}}
                        >
                          {
                            DoctorData.map((val)=>{
                              return(
                                <option style={{color:"#333"}} value={val.id} key={val.id}>{`${val.name} / ${val.title}`}</option>
                              )
                            })
                          }
                        </select>
                    </InputGroup>
                    


                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input
                        placeholder="Your Contact"
                        type="number"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange = {(val)=>{
                            setContact(val.target.value)
                        }}
                      ></Input>
                    </InputGroup>


                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input
                        placeholder="Your Message"
                        type="textarea"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange = {(val)=>{
                            setMessage(val.target.value)
                        }}
                        style={{borderRadius:20}}
                      ></Input>
                    </InputGroup>


                    
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={validation}
                      size="lg"
                      disabled={Sending}
                    >
                      Send
                    </Button>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default AppointmentHeader;
