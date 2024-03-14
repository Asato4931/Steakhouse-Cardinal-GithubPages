import { useRef, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import interior from "../assets/img/interior.png";
import "animate.css";

export default function AboutUs() {
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
    <section className="aboutus" id="aboutus">
      <div class="container">
        <Row className="align-items-center">
          <span className="aboutus-title">About Us</span>
          <Col xs={12} md={6}>
            <p className="aboutus-text">
              歴史を感じさせる暖炉の側で、上質なひと時を。
              <br />
              ステーキハウス「カーディナル」では、選び抜かれた最高級の肉を、
              <br />
              職人技が光る炭火焼きでご提供します。
              <br />
              厳選されたワインと共に、香ばしい肉の旨みと熟成された風味をお楽しみください。
              <br />
              赤と黒を基調とした洗練された空間は、落ち着いた大人の社交場としても最適。
              <br />
              記念日のディナーや特別な夜に、格別の美食体験をお約束します。
              <br />
            </p>
          </Col>
          <Col xs={12} md={6}>
            <div className="aboutus-image-container">
              <img
                src={interior}
                ref={myRef}
                className={
                  isElementVisible
                    ? "aboutus-image animate__animated animate__fadeInRight "
                    : ""
                }
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
