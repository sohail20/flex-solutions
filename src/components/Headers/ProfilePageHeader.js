import { UserData } from "index";
import React, { useContext } from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader(props) {
  let pageHeader = React.createRef();
  const AppoinmentList = props.data;
  const data = useContext(UserData);

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/ProfileAvatar.png")}></img>
          </div>
          <h3 className="title">{data.name}</h3>
          <p className="category" style={{textTransform:"none"}}>{data.email}</p>
          <div className="content">
            <div className="social-description">
              <h2>0</h2>
              <p>Reports</p>
            </div>
            <div className="social-description">
              <h2>{AppoinmentList.length}</h2>
              <p>Appointments</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
