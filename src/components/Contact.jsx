import { useRef, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import logo_small from "../assets/img/Steakhouse Cardinal Small.svg";
import "animate.css";

export default function Contact() {
  const myRef = useRef();
  const [isElementVisible, setisElementVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setisElementVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={logo_small}
              alt="Contact Us"
              className={
                isElementVisible
                  ? "contact-image animate__animated animate__fadeIn"
                  : ""
              }
              ref={myRef}
            />
          </Col>
          <Col>
            <form>
              <Row>
                <Col sm={6} className="px-1 form-boxes">
                  <input type="text" placeholder="氏名" />
                </Col>
                <Col sm={6} className="px-1 form-boxes">
                  <input type="text" placeholder="苗字" />
                </Col>
                <Col sm={6} className="px-1 form-boxes">
                  <input type="email" placeholder="emailアドレス" />
                </Col>
                <Col sm={6} className="px-1 form-boxes">
                  <input type="tel" placeholder="お電話番号" />
                </Col>
                <Col md={6} className="px-1 form-boxes">
                  <textarea placeholder="ご要望" />
                  <button type="button">
                    <span>送信</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
