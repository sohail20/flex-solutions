import { isLoggedIn } from "Functions/IsloggedIn";
import { UserData } from "index";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  ButtonGroup,
} from "reactstrap";
import { TitleName } from "Theme/theme";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const data = useContext(UserData)
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  },[]);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
        <UncontrolledDropdown className="button-dropdown">
            {
              isLoggedIn?
              <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
              >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            :null
            }
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                My Reports
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                My Appointments
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Settings
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Contact
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <Link id="navbar-brand" style={{textDecoration:"none"}}  to="/index" >
             {TitleName}
            </Link>
            <UncontrolledTooltip target="#navbar-brand">
              Home Page
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <UncontrolledDropdown>
                <ButtonGroup>
                  <NavLink to="/Specialities-page" tag={Link} style={{background:"transparent"}} >
                    Banquets
                  </NavLink>
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    className="dropdown-toggle-split"
                    color="primary"
                    data-toggle="dropdown"
                    type="button"
                    style={{background:"transparent", marginTop:-1}}
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                </ButtonGroup>
                <DropdownMenu>
                  <NavLink to="/halls-page" tag={Link} style={{color:"#333333"}}>
                    Halls
                  </NavLink>
                  <NavLink to="/lawns-page" tag={Link} style={{color:"#333333"}}>
                   Lawns
                  </NavLink>
                  <DropdownItem divider />
                  <NavLink to="/Specialities-page" tag={Link} style={{color:"#333333"}}>
                    Catering
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("OurDoctors")
                      .scrollIntoView();
                  }}
                >
                  <p>Halls</p>
                </NavLink>
              </NavItem> */}


              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("instance")
                      .scrollIntoView();
                  }}
                >
                  <p>Get Instance</p>
                </NavLink>
              </NavItem>



             {/*  <NavItem>
                <NavLink
                  to="/about-page"
                  tag={Link}
                >
                    <p>Lawns</p>
                </NavLink>
              </NavItem> */}

              <NavItem>
                <NavLink
                  to="/career-page"
                  tag={Link}
                >
                  <p>Event Plan</p>
                </NavLink>
              </NavItem>
              {
                isLoggedIn?
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    href="#pablo"
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="now-ui-icons users_circle-08 mr-1"></i>
                    <p>{data.name}</p>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/profile-page" tag={Link}>
                      <i className="now-ui-icons business_badge mr-1"></i>
                      My Profile
                    </DropdownItem>
                    <DropdownItem to="/index" tag={Link}>
                      <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>
                      History
                    </DropdownItem>
                    <DropdownItem
                      target="_blank"
                      onClick={() => {
                        localStorage.removeItem("hospitalAppToken");
                        window.location.reload();
                      }}
                    >
                      <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                      Log out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                :
                <NavItem>
                  <Link to="login-page">
                    <Button
                      className="nav-link btn-neutral"
                      color="info"
                      id="upgrade-to-pro"
                    >
                      <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                      <p>Sign In</p>
                    </Button>
                  </Link>
                  
                  <UncontrolledTooltip target="#upgrade-to-pro">
                    Sign in now to get everything online 
                  </UncontrolledTooltip>
                </NavItem>
              }
             
              <NavItem>
                  <Link to="vendor-page">
                    <Button
                      className="nav-link btn-neutral"
                      id="Vendor"
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                      {" "}
                      <p>Join as Vendor</p>
                    </Button>
                  </Link>
                  
                  <UncontrolledTooltip target="#Vendor">
                    Join as Vendor
                  </UncontrolledTooltip>
                </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
