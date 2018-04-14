import React from "react";

import Card from "./Card";

import { primaryColor, nyu, princeton } from "../common/constants";

const Row = ({ gradients = [], names = [] }) => (
  <div className="row">
    <Card gradient={gradients[0]} title={names[0]} />
    <div className="gap" />
    <Card gradient={gradients[1]} title={names[1]} />
    <Style />
  </div>
);

const Style = () => (
  <style jsx>{`
    .row {
      display: flex;
      height: 55vh;
      padding: 3% 5% 2% 5%;
      min-height: 330px;
      flex-wrap: wrap;
    }
    .gap {
      flex: 0.1;
    }
  `}</style>
);

export default Row;
