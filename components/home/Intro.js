import React from "react";

import { primaryColor, xlarge, xxlarge } from "../common/constants";

const Intro = props => (
  <div className="intro">
    <Style />
    <div className="intro-name">Jeane Carlos</div>
    <div className="intro-subtitle">
      Tinkerer, Designer, and <span className="highlight">Hacker</span>
    </div>
  </div>
);

const Style = () => (
  <style jsx>{`
    .intro {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding-left: 7.5%;
      padding-top: 8%;
    }

    .intro-name {
      font-size: ${xxlarge};
      font-weight: 900;
    }

    .intro-subtitle {
      font-size: ${xlarge};
      font-weight: 900;
    }

    .highlight {
      font-size: inherit;
      font-weight: inherit;
      color: ${primaryColor};
    }
  `}</style>
);

export default Intro;
