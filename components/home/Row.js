import React from 'react';

import Card from './Card';
import { primaryColor } from '../common/constants';

const Row = props => (
	<div className="row">
		<Card />
		<div className="gap" />
		<Card />
		<Style />
	</div>
);

const Style = () => (
	<style jsx>{`
		.row {
			display: flex;
			height: 55vh;
			padding: 3% 6% 3% 6%;
		}
		.gap {
			flex: 0.1;
		}
	`}</style>
);

export default Row;
