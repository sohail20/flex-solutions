import axios from 'axios';
import config from 'config';
import { isLoggedIn } from 'Functions/IsloggedIn';
import { UserData } from 'index';
import React,{useState,useContext} from 'react';
// reactstrap components
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
  } from "reactstrap";
import swal from 'sweetalert';
function Issue(props) {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const data = useContext(UserData);

    const [Name] = useState(data.name);
    const [Email] = useState(data.email);
    const [Message, setMessage] = useState("");

    const validate = ()=>{
      console.log({
        user_id:data.id,
        name:Name,
        email:Email,
        message:Message
      })
      if(Message){
        axios.post("issue",{
          user_id:data.id,
          name:Name,
          email:Email,
          message:Message
        },config).then((res)=>{
          
        }).catch((err)=>{
          swal("Alert!",err.message,"warning")
        })
      }
      else
        swal("Alert!","Please write some message.","warning")
    }
    return (
        <div className="section section-contact-us text-center" id="issue">
          <Container>
            <h2 className="title">Have an issue?</h2>
            <p className="description">Your advice is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Name..."
                    type="text"
                    defaultValue={Name}
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    defaultValue={Email}

                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                    onChange={(val)=>{
                      setMessage(val.target.value)
                    }}
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault() 
                      if(isLoggedIn)
                        validate();
                      else  
                        swal("Please loggin first")
                    }}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
}

export default Issue;