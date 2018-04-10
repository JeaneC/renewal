import React from "react";

import Navbar from "../../components/common/Navbar";
import Header from "../../components/about/Header";
import Body from "../../components/about/Body";

const AboutPage = () => (
  <div className="force-scroll">
    <Navbar name about />
    <Header />
    <Body />
    <style jsx>{`
      .force-scroll {
        overflow-y: scroll;
      }
    `}</style>
  </div>
);

export default AboutPage;
