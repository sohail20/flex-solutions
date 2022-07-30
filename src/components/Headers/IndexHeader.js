/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Subtitle } from "Theme/theme";
import { TitleName } from "Theme/theme";
import { Sologan } from "Theme/theme";
import logo from "assets/logo.png";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/bg.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img alt="..." className="n-logo" src={logo}></img>
              <h1
                className="h1-seo"
                style={{
                  marginTop: "15px",
                  fontWeight: "bold",
                  fontFamily: "lucida grande",
                }}
              >
                Solutions
              </h1>
            </div>
            <h3>{Sologan}</h3>
          </div>
          <h6 className="category category-absolute">
            {Subtitle}
            {/* Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png")}
              ></img>
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              ></img>
            </a>
            . */}
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
