/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a href="/index" target="_blank">
                  Flex Solutions
                </a>
              </li>
              <li>
                <a href="/index" target="_blank">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Right reserved by{" "}
            <a href="/index" target="_blank">
              Flex Solutions
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
