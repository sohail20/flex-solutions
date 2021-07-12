/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="http://www.thecodeme.com"
                target="_blank"
              >
                thecodeme
              </a>
            </li>
            <li>
              <a
                href="http://www.thecodeme.com"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="http://www.thecodeme.com"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed 
          and Coded by{" "}
          <a
            href="http://www.thecodeme.com"
            target="_blank"
          >
            thecodeme
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
