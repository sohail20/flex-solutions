import axios from "axios";
import config from "config";
import { isLoggedIn } from "Functions/IsloggedIn";
import { UserData } from "index";
import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
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
import { addvenue } from "store/venues";
import swal from "sweetalert";
function GetInstanceQuote(props) {
  const dispatch = useDispatch()
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const data = useContext(UserData);

  const [Name] = useState(data.name);
  const [Email] = useState(data.email);
  const [Message, setMessage] = useState("");

  const validate = () => {
    if (Message) {
      dispatch(addvenue({name:"hello"}))
    } else swal("Alert!", "Please write some message.", "warning");
  };
  return (
    <div className="section section-contact-us text-center" id="instance">
      <Container>
        <h2 className="title">Have an issue?</h2>
        <p className="description">Get An Instant Quote</p>
        <Row>
          <Col className="text-center ml-auto mr-auto" lg="6" md="8">
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <Input
                    placeholder="First Name"
                    type="text"
                    defaultValue={Name}
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
              </Col>

              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <Input
                    placeholder="Last Name"
                    type="text"
                    defaultValue={Name}
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
              </Col>
            </Row>

            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <Input
                    placeholder="Email"
                    type="text"
                    defaultValue={Name}
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
              </Col>

              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <Input
                    placeholder="City"
                    type="text"
                    defaultValue={Name}
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
              </Col>
            </Row>

            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <Input
                    placeholder="Phone Number"
                    type="number"
                    defaultValue={Name}
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
              </Col>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <Input
                    placeholder="Desired venue"
                    type="text"
                    defaultValue={Name}
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
              </Col>
            </Row>

            <InputGroup
              className={"input-lg" + (firstFocus ? " input-group-focus" : "")}
            >
              <Input
                placeholder="Date"
                type="date"
                defaultValue={Name}
                onFocus={() => setFirstFocus(true)}
                onBlur={() => setFirstFocus(false)}
              ></Input>
            </InputGroup>

            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <select
                    style={{
                      width: "100%",
                      borderRadius: 30,
                      padding: 13,
                      opacity: 0.5,
                    }}
                  >
                    <option>A</option>
                    <option>B</option>
                  </select>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <select
                    style={{
                      width: "100%",
                      borderRadius: 30,
                      padding: 13,
                      opacity: 0.5,
                    }}
                  >
                    <option>100-200</option>
                    <option>200-300</option>
                    <option>300-500</option>
                  </select>
                </InputGroup>
              </Col>
            </Row>

            <InputGroup
              className={"input-lg" + (firstFocus ? " input-group-focus" : "")}
            >
              <select
                style={{
                  width: "100%",
                  borderRadius: 30,
                  padding: 13,
                  opacity: 0.5,
                }}
              >
                <option>Lawn</option>
                <option>Hall</option>
                <option>Terrace</option>
                <option>Banquet</option>
              </select>
            </InputGroup>

            <div className="textarea-container">
              <Input
                cols="80"
                name="name"
                placeholder="Type a message..."
                rows="4"
                type="textarea"
                onChange={(val) => {
                  setMessage(val.target.value);
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
                  e.preventDefault();
                  if (isLoggedIn) validate();
                  else swal("Please loggin first");
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

export default GetInstanceQuote;
