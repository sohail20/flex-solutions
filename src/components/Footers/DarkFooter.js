/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="http://www.thecodeme.com"
                target="_blank"
              >
                TheCodeme
              </a>
            </li>
            <li>
              <a
                href="http://thecodeme.com"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="http://thecodeme.com"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.google.com"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
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

export default DarkFooter;
