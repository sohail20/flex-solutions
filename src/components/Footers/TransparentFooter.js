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
          <a href="/index">Flex Solutions</a>.
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
