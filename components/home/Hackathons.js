import React from "react";

import {
  primaryColor,
  small,
  medium,
  large,
  xlarge,
  xxlarge
} from "../common/constants";

const Hackathons = props => (
  <div className="hackathons">
    <Style />
    <div className="hackathons-header">
      Hackathons
      {/* <span className="intro-highlight">.</span> */}
    </div>
    <div className="hackathon-hack">
      <div className="hackathon-hack-header">HackPrinceton - OneHealth</div>
      <div className="hackathon-hack-subtitle">
        Winner of 2nd Overall, Ark Blockchain, and Marlabs Health
      </div>
      <div className="hackathon-hack-logistics">
        Mar 30 - Apr 1, 2018, Princeton, 400+ Hackers
      </div>
      <div className="hackathon-hack-description">
        OneHealth is a platform for electronic medical records that promises
        security, accesibility, and efficiency. We used an implementation of Ark
        Blockchain to host encrypted pointers to a centralized medical record
        database.
      </div>
    </div>
    <div className="hackathon-hack">
      <div className="hackathon-hack-header">HackNYU - IntentCoin</div>
      <div className="hackathon-hack-subtitle">
        Winner of Overall, Google, and BNY Melon
      </div>
      <div className="hackathon-hack-logistics">
        Mar 23 - Mar 25, 2018, New York University, 400+ Hackers
      </div>
      <div className="hackathon-hack-description">
        OneHealth is a platform for electronic medical records that promises
        security, accesibility, and efficiency. We used an implementation of Ark
        Blockchain to host encrypted pointers to a centralized medical record
        database.
      </div>
    </div>
    <div className="hackathon-hack">
      <div className="hackathon-hack-header">HackCU - TweetyQ</div>
      <div className="hackathon-hack-subtitle">Winner of Best Twitter Hack</div>
      <div className="hackathon-hack-logistics">
        Feb 24 - Feb 25, 2018, Colorado Boulder University, 400+ Hackers
      </div>
      <div className="hackathon-hack-description">
        OneHealth is a platform for electronic medical records that promises
        security, accesibility, and efficiency. We used an implementation of Ark
        Blockchain to host encrypted pointers to a centralized medical record
        database.
      </div>
    </div>
    <div className="hackathon-hack">
      <div className="hackathon-hack-header">HackCewit - TrAIner</div>
      <div className="hackathon-hack-subtitle">
        Winner of Most Entrepreneurial and Best Data Visualization
      </div>
      <div className="hackathon-hack-logistics">
        Feb 16 - Feb 18, 2018, Stony Brook University, 200+ Hackers
      </div>
      <div className="hackathon-hack-description">
        OneHealth is a platform for electronic medical records that promises
        security, accesibility, and efficiency. We used an implementation of Ark
        Blockchain to host encrypted pointers to a centralized medical record
        database.
      </div>
    </div>
    <div className="hackathon-hack">
      <div className="hackathon-hack-header">PennApps - Gradian</div>
      <div className="hackathon-hack-subtitle">
        Winner of Top 10 and Best Education
      </div>
      <div className="hackathon-hack-logistics">
        Feb 16 - Feb 18, 2018, Stony Brook University, 200+ Hackers
      </div>
      <div className="hackathon-hack-description">
        OneHealth is a platform for electronic medical records that promises
        security, accesibility, and efficiency. We used an implementation of Ark
        Blockchain to host encrypted pointers to a centralized medical record
        database.
      </div>
    </div>
    <div className="hackathon-hack">
      <div className="hackathon-hack-header">Code For Good - We.R.C</div>
      <div className="hackathon-hack-subtitle">Winner of 1st Place Overall</div>
      <div className="hackathon-hack-logistics">
        Feb 16 - Feb 18, 2018, Stony Brook University, 200+ Hackers
      </div>
      <div className="hackathon-hack-description">
        OneHealth is a platform for electronic medical records that promises
        security, accesibility, and efficiency. We used an implementation of Ark
        Blockchain to host encrypted pointers to a centralized medical record
        database.
      </div>
    </div>
  </div>
);

const Style = () => (
  <style jsx>{`
    .hackathons {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      padding-left: 7.5%;
      padding-top: 8%;
      width: 98vw;
    }

    .hackathons-header {
      font-size: ${xxlarge};
      font-weight: 900;
      margin-bottom: 8rem;
    }

    .hackathon-hack {
      margin-bottom: 7rem;
      width: 38vw;
    }

    .hackathon-hack-header {
      font-size: ${large};
      font-weight: 900;
    }

    .hackathon-hack-subtitle {
      font-size: ${medium};
      font-weight: 900;
    }

    .hackathon-hack-logistics {
      font-size: ${small};
      font-style: italic;
      margin-top: 0.5rem;
    }

    .hackathon-hack-description {
      font-size: ${small};
      margin-top: 2rem;
    }
  `}</style>
);

export default Hackathons;
