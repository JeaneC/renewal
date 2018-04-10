import React, { Component } from "react";

import {
  darkerGrey,
  hackathonTechStack,
  hackathonTechInfo
} from "../common/constants";

import Medal from "./Medal";

class Card extends Component {
  //I name my styles the same as the title name, which can lead to errors if the title has spaces
  constructor(props) {
    super(props);

    const { title, gradient } = props;
    const styleTitle = title.replace(/\s+/g, "");

    console.log("about to log state");
    this.state = {
      techStack: hackathonTechStack[title],
      techInfo: hackathonTechInfo[title],
      hover: false,
      title,
      styleTitle,
      gradient
    };
  }

  onCardHover = () => {
    this.setState({ hover: true });
  };

  render() {
    let { cardClass, hover } = this.state;

    return (
      <div className="card-container" onMouseEnter={() => this.onCardHover()}>
        <div className={this.state.styleTitle}>
          <div className="card-gap card-medals-container">
            {this.state.techInfo.map(info => (
              <Medal text={info} key={info} hover={hover} />
            ))}
          </div>
          <div className="card-title">{this.state.title}</div>
          <div className="card-gap" />
        </div>
        <div className="card-footer">
          {this.state.techStack.map(tech => (
            <div className="card-footer-item" key={tech}>
              {tech}
            </div>
          ))}
        </div>
        <Style gradient={this.state.gradient} title={this.state.styleTitle} />
      </div>
    );
  }
}

const Style = ({ gradient, title }) => (
  <style jsx>{`
    .card-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      color: white;
      border: 1px solid white;
      min-height: 300px;
      cursor: pointer;
      min-width: 550px;
      flex-wrap: wrap;
    }

    .${title} {
      flex: 0.9;
      background: linear-gradient(${gradient[0]}, ${gradient[1]});
      border-radius: 0.9em 0.9em 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .card-title {
      color: white;
      font-size: 2.5em;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .card-footer {
      flex: 0.18;
      border: 1px solid ${darkerGrey};
      border-radius: 0 0 0.9em 0.9em;
      display: flex;
      align-items: center;
      color: ${darkerGrey};
      padding-left: 5%;
    }

    .card-medals-container {
      display: flex;
      flex-direction: column;
      color: white;
      align-self: flex-end;
    }

    .card-gap {
      flex: 1;
    }

    .card-footer-item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.6em;
      border: 1px solid ${darkerGrey};
      border-radius: 5px;
      height: 30px;
      padding-left: 1em;
      padding-right: 1em;
      font-size: 0.8em;
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

    /* ----------- Custom Breakpoint Because My Flex Breaks Here ----------- */

    /* Portrait and Landscape */
    @media (max-device-width: 1223px) {
      .card-container {
        flex: 1;
        min-height: 400px;
        margin-bottom: 2rem;
      }
    }
  `}</style>
);

export default Card;
