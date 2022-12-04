import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  Spinner,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Issue from "views/index-sections/Issue";
import SpecialitiesHeader from "components/Headers/SpecialitiesHeader";
import { useMakeRequestForVendorMutation } from "api/makeRequestForVendor";
import swal from "sweetalert";
import { useGetUpdatedUserQuery } from "api/authenticate";

function Vendor() {
  const [dataObj, setDataObj] = React.useState({});

  const [makeRequestForVendor, { isLoading }] =
    useMakeRequestForVendorMutation();

  const { data: userData } = useGetUpdatedUserQuery();

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

  const handleSubmit = () => {
    const { _id } = JSON.parse(localStorage.getItem("user"));
    makeRequestForVendor({ ...dataObj, userId: _id }).then((res) => {
      if (res.error) {
        return swal("Alert!", res.error.data, "warning");
      }
      swal("Success", "We will contact you soon!", "success");
    });
  };
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <SpecialitiesHeader
          title="Want to be our part?"
          img={
            "https://www.klaviyo.com/wp-content/uploads/2017/08/officehours-1024x683.jpg"
          }
        />

        <div className="section section-contact-us text-center" id="issue">
          <Container>
            <h2 className="title">Be a part of our family</h2>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={"input-lg" + (true ? " input-group-focus" : "")}
                >
                  <Input
                    placeholder="Full Name"
                    type="text"
                    value={dataObj.name}
                    onChange={(e) => {
                      setDataObj({ ...dataObj, name: e.target.value });
                    }}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={"input-lg" + (true ? " input-group-focus" : "")}
                >
                  <Input
                    placeholder="Designation"
                    type="text"
                    value={dataObj.designation}
                    onChange={(e) => {
                      setDataObj({ ...dataObj, designation: e.target.value });
                    }}
                  ></Input>
                </InputGroup>
              </Col>

              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={"input-lg" + (true ? " input-group-focus" : "")}
                >
                  <Input
                    placeholder="Email Address"
                    type="email"
                    onChange={(e) => {
                      setDataObj({ ...dataObj, address: e.target.value });
                    }}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={"input-lg" + (true ? " input-group-focus" : "")}
                >
                  <Input
                    placeholder="Mobile Number"
                    onChange={(e) => {
                      setDataObj({ ...dataObj, phone: e.target.value });
                    }}
                    type="number"
                  ></Input>
                </InputGroup>
              </Col>

              {/* <h2 className="title">Venue Details</h2>
              <br /> */}

              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={"input-lg" + (true ? " input-group-focus" : "")}
                >
                  <Input
                    placeholder="Venue Name"
                    type="text"
                    onChange={(e) => {
                      setDataObj({ ...dataObj, venueName: e.target.value });
                    }}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={"input-lg" + (true ? " input-group-focus" : "")}
                >
                  <select
                    style={{
                      width: "100%",
                      borderRadius: 30,
                      padding: 13,
                      opacity: 0.5,
                    }}
                    onChange={(e) => {
                      setDataObj({ ...dataObj, venueType: e.target.value });
                    }}
                  >
                    <option>-Type-</option>
                    <option>Lawn</option>
                    <option>Hall</option>
                    <option>Form House</option>
                  </select>
                </InputGroup>
              </Col>

              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={"input-lg" + (true ? " input-group-focus" : "")}
                >
                  <select
                    style={{
                      width: "100%",
                      borderRadius: 30,
                      padding: 13,
                      opacity: 0.5,
                    }}
                    onChange={(e) => {
                      setDataObj({ ...dataObj, location: e.target.value });
                    }}
                  >
                    <option>-Location-</option>
                    <option>Karachi</option>
                    <option>Hyderabad</option>
                    <option>Islamabad</option>
                  </select>
                </InputGroup>
                <InputGroup
                  className={"input-lg" + (true ? " input-group-focus" : "")}
                >
                  <select
                    style={{
                      width: "100%",
                      borderRadius: 30,
                      padding: 13,
                      opacity: 0.5,
                    }}
                    onChange={(e) => {
                      setDataObj({ ...dataObj, sitting: e.target.value });
                    }}
                  >
                    <option>-Persons-</option>
                    <option>200-300</option>
                    <option>300-500</option>
                  </select>
                </InputGroup>
              </Col>

              <Col className="text-center" lg="12" md="12">
                <InputGroup
                  className={"input-lg" + (true ? " input-group-focus" : "")}
                >
                  <select
                    style={{
                      width: "100%",
                      borderRadius: 30,
                      padding: 13,
                      opacity: 0.5,
                    }}
                    onChange={(e) => {
                      setDataObj({ ...dataObj, ratePerPerson: e.target.value });
                    }}
                  >
                    <option>-Rate per person-</option>
                    <option>200</option>
                    <option>300</option>
                    <option>500</option>
                  </select>
                </InputGroup>
                <InputGroup
                  className={"input-lg" + (true ? " input-group-focus" : "")}
                >
                  <select
                    style={{
                      width: "100%",
                      borderRadius: 30,
                      padding: 13,
                      opacity: 0.5,
                    }}
                  >
                    <option>-Persons-</option>
                    <option>200-300</option>
                    <option>300-500</option>
                  </select>
                </InputGroup>
              </Col>

              {/* <Col className="text-center ml-auto mr-auto" lg="6" md="8">                
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
              </Col> */}
              <Col className="text-center ml-auto mr-auto" lg="4" md="4"></Col>

              <Col className="text-center ml-auto mr-auto" lg="4" md="4">
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    size="lg"
                    loa
                    onClick={handleSubmit}
                  >
                    {isLoading ? (
                      <Spinner
                        style={{ width: "18px", height: "18px" }}
                        type="grow"
                        color="light"
                      />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </Col>

              <Col className="text-center ml-auto mr-auto" lg="4" md="4"></Col>
            </Row>
          </Container>
        </div>
        <Issue />
        <DefaultFooter />
      </div>
    </>
  );
}

export default Vendor;
