import React from 'react';

import { primaryColor, darkerGrey } from '../common/constants';

const Title = props => (
	<div className="title">
		I am a Hackathon Enthusiast
		<Style />
	</div>
);

const Style = () => (
	<style jsx>{`
		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 35vh;
			font-size: 3em;
			color: ${darkerGrey};
		}
	`}</style>
);

export default Title;
