import React from "react";

import { primaryColor, gold } from "../common/constants";

const Medal = ({ text, hover }) => {
  let className = hover ? "medal hover" : "medal";

  return (
    <div className={className}>
      {text}
      <Style />
    </div>
  );
};

const Style = () => (
  <style jsx>{`
    .medal {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 13rem;
      height: 2.1rem;
      margin-top: 0.7rem;
      font-family: "Open Sans";
      font-weight: bold;
      font-size: 0.9rem;
      opacity: 0;
      background-color: ${gold};
      transform: translateX(2rem);
    }

    .medal:first-child {
      margin-top: 1.2rem;
    }

    .hover {
      opacity: 1;
      transform: translateX(0rem);
      transition: opacity 600ms cubic-bezier(0.895, 0.03, 0.685, 0.22),
        transform 600ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    /* ----------- Non-Retina Screens ----------- */
    @media (max-device-width: 1600px) {
      .medal {
        width: 10.5rem;
        font-size: 0.8rem;
        height: 1.5rem;
        margin-top: 0.4rem;
      }

      .medal:first-child {
        margin-top: 1rem;
      }
    }
  `}</style>
);

export default Medal;
