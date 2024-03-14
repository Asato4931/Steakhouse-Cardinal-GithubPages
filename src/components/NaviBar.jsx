import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/img/logo1.svg";

import { useEffect, useState } from "react";

export default function NaviBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", { onScroll });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }

  return (
    <Navbar className={scrolled ? "scrolled" : ""}>
      <div class="container">
        <Navbar.Brand href="#home">
          <img src={logo} className="navbarlogo" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#aboutus"
              className={
                activeLink === "aboutus" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("aboutus")}
            >
              About Us
            </Nav.Link>

            <Nav.Link
              href="#menu"
              className={
                activeLink === "menu" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("menu")}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              href="#accessinfo"
              className={
                activeLink === "accessinfo"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("accessinfo")}
            >
              Access & Info
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
            >
              <button
                className="vvd"
                onClick={() => onUpdateActiveLink("contact")}
              >
                <span>予約フォーム</span>
              </button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
