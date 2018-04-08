import React from 'react';

import { primaryColor, darkerGrey } from '../common/constants';

const Title = props => (
	<div className="about-header">
		<div className="header-1">Jeane Ferdinand Carlos</div>
		<div className="header-2">Software Engineer</div>
		<Style />
	</div>
);

const Style = () => (
	<style jsx>{`
		.about-header {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 25vh;
			color: ${darkerGrey};
		}

		.header-1 {
			font-size: 2.7em;
			font-family: Georgia;

			font-weight: 600;
		}

		.header-2 {
			font-family: Georgia;
			font-size: 1.8em;
			margin-top: 0.6em;
		}
	`}</style>
);

export default Title;
