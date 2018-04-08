import React from 'react';

import { primaryColor } from '../common/constants';

const Card = props => (
	<div className="container">
		<div className="card" />
		<Style />
	</div>
);

const Style = () => (
	<style jsx>{`
		.container {
			display: flex;
			flex: 1;
			color: white;
			border: 1px solid white;
		}

		.card {
			flex: 1;
			height: 100%;
			background: blue;
		}
	`}</style>
);

export default Card;
