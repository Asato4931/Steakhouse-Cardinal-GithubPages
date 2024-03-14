import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo1.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col xs={6}>
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col xs={6} className="text-end">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1} />
              </a>
              <a href="">
                <img src={navIcon2} />
              </a>
              <a href="">
                <img src={navIcon3} />
              </a>
            </div>
            <p>CopyRight 2024. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
