import React from 'react';

import { primaryColor, darkerGrey } from '../common/constants';

const Card = ({ gradient, title }) => {
	//I name my styles the same as the title name, which can lead to errors if the title has spaces
	let styleTitle = title.replace(/\s+/g, '');

	return (
		<div className="container">
			<div className={styleTitle}>
				<div className="card-title">{title}</div>
			</div>
			<div className="card-footer">
				<div className="card-footer-item">Wolfram Mathematica</div>
				<div className="card-footer-item">Azure Services</div>
				<div className="card-footer-item">Ionic</div>
				<div className="card-footer-item">React</div>
			</div>
			<Style gradient={gradient} title={styleTitle} />
		</div>
	);
};

const Style = ({ gradient, title }) => (
	<style jsx>{`
		.container {
			display: flex;
			flex-direction: column;
			flex: 1;
			color: white;
			border: 1px solid white;
			min-height: 300px;
		}

		.${title} {
			flex: 0.9;
			background: linear-gradient(${gradient[0]}, ${gradient[1]});
			border-radius: 0.9em 0.9em 0 0;
			display: flex;
			justify-content: center;
			align-items: center;
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
	`}</style>
);

export default Card;
