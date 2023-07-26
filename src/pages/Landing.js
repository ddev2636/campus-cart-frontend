import React from "react";
import "../landing.css";
import { Link } from "react-router-dom";
import landing2 from "../assets/landing2.svg";
import logo from "../assets/logo.svg";
const Landing = () => {
  return (
    <main>
      <div className="main-landing">
        <div className="nav">
          <img src={logo} alt="" className="logo-img" />
        </div>
        <div className="grid-container">
          <div className="grid-item1">
            <h3>Shop smarter, not harder with our college essentials</h3>
            <button className="landing-btn">
              <Link to="/register" className="landing-link">
                Register/Login
              </Link>
            </button>
          </div>
          <div className="grid-item2">
            <img src={landing2} alt="" className="landing-image" />
          </div>
        </div>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="41%" y1="1%" x2="59%" y2="99%">
              <stop offset="5%" stop-color="#0693e3"></stop>
              <stop offset="95%" stop-color="#9900ef"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,600 C 0,600 0,300 0,300 C 90.22966507177034,343.98086124401914 180.45933014354068,387.9617224880382 279,376 C 377.5406698564593,364.0382775119618 484.3923444976077,296.13397129186603 591,265 C 697.6076555023923,233.86602870813394 803.9712918660287,239.50239234449762 892,239 C 980.0287081339713,238.49760765550238 1049.7224880382776,231.85645933014354 1138,241 C 1226.2775119617224,250.14354066985646 1333.1387559808613,275.07177033492826 1440,300 C 1440,300 1440,600 1440,600 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default Landing;
