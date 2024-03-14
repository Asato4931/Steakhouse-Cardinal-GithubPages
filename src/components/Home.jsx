import React, { useState, useEffect } from "react";
import Vivus from "vivus";
import cardinalhandwriting from "../assets/img/Cardinal_Handwriting.svg";
import "animate.css";

import exterior1 from "../assets/img/exterior1.png";
import exterior2 from "../assets/img/exterior2.png";

import diningtable from "../assets/img/diningtable.png";
import steak3 from "../assets/img/steak3.png";

import logo from "../assets/img/logo1.png";

import { ArrowRightCircle } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";

export default function Home() {
  return (
    <div id="home" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div className="homelogo-box">
          <img src={logo} className="homelogo-image" />
        </div>
        <div class="carousel-item active" data-bs-interval="7000">
          <img src={exterior1} class="d-block w-100" alt="First Slide" />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src={diningtable} class="d-block w-100" alt="Second Slide" />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src={exterior2} class="d-block w-100" alt="Third Slide" />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src={steak3} class="d-block w-100" alt="Fourth Slide" />
        </div>
        <div className="bubbles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
