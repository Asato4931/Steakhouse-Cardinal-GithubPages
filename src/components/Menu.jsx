import { useRef, useEffect, useState } from "react";

import wine_bw from "../assets/img/wine_bw.png";
import steak_bw from "../assets/img/steak_bw.png";
import fireplace_bw from "../assets/img/fireplace_bw.png";

import wine from "../assets/img/wine.png";
import steak from "../assets/img/steak1.png";
import fireplace from "../assets/img/fireplace.png";

import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

import "animate.css";

export default function Menu() {
  const myRef = useRef();
  const [isElementVisible, setisElementVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setisElementVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  });
  return (
    <section className="menu" id="menu" ref={myRef}>
      <div class="container">
        <Row className="align-items-center">
          <span className="menu-title">Menu</span>
          <Col xs={12} md={4} className="menu-box">
            <button
              className={
                isElementVisible
                  ? "menu-button animate__animated animate__slideInLeft "
                  : ""
              }
            >
              <span className="menu-text foods">Foods</span>

              <img src={steak_bw} />
              <img src={steak} />
            </button>
          </Col>

          <Col xs={12} md={4} className="menu-box">
            <button
              className={
                isElementVisible
                  ? "menu-button animate__animated animate__fadeIn"
                  : ""
              }
            >
              <span className="menu-text drinks">Drinks</span>
              <img src={wine_bw} />
              <img src={wine} />
            </button>
          </Col>
          <Col xs={12} md={4} className="menu-box">
            <button
              className={
                isElementVisible
                  ? "menu-button animate__animated animate__slideInRight"
                  : ""
              }
            >
              <span className="menu-text others">Others</span>
              <img src={fireplace_bw} />
              <img src={fireplace} />
            </button>
          </Col>
        </Row>
      </div>
    </section>
  );
}
