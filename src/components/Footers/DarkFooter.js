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
              <a href="/index">Flex Solutions</a>
            </li>
            <li>
              <a href="/index">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
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
  );
}

export default DarkFooter;
