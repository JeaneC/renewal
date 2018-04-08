import React from 'react';
// import AboutPic from '../../static/propic.png';
import { primaryColor, darkerGrey } from '../common/constants';

const ComponentName = props => (
	<div className="about-body">
		<div className="about-image-container">
			<img src="/static/propic.png" alt="my image" className="about-image" />
		</div>
		<div className="about-description">
			<p className="about-paragraph">
				I started coding Summer 2017 after switching majors for the fourth time.
				Two months into coding, I decided to test my luck at my first major
				hackathon hosted by JP Morgan Chase. In just 24 hours, my team somehow
				ended up winning the entire competition!
			</p>
			<p className="about-paragraph">
				Now, I am an incoming intern at{' '}
				<span className="about-highlight">JP Morgan Chase </span>and a{' '}
				<span className="about-highlight">multi-winning hackathon hacker</span>.
				In 2018 alone, I have visited more than 5 different states all over the
				country to compete in 8 different hackathons!
			</p>
			<p className="about-paragraph">
				Many people compete for different reasons. The truth is, competing is a
				way for friends, peers, and the world to hopefully see my passion in the
				things I can create.
			</p>
		</div>
		<Style />
	</div>
);

const Style = () => (
	<style jsx>{`
		.about-body {
			height: 60vh;
			display: flex;
			margin-left: 5%;
			margin-right: 5%;
		}

		.about-image-container {
			flex: 0.7;
			padding: 2% 4% 7% 4%;
		}

		.about-image {
			width: 100%;
			height: auto;
		}

		.about-description {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0% 4% 5% 3%;
			margin-top: 2%;
		}

		.about-paragraph {
			color: ${darkerGrey};
			margin-bottom: 0.5em;
			font-size: 1.05em;
			line-height: 1.4em;
			font-family: 'Open Sans', sans-serif;
			font-weight: 300;
		}

		.about-highlight {
			font-size: inherit;
			font-family: inherit;
			color: ${primaryColor};
			font-weight: 600;
		}
	`}</style>
);

export default ComponentName;
