// This file is not an actual component but a template for creating new ones
import React from 'react';
import Row from './Row';

import {
	princeton,
	nyu,
	coloradoboulder,
	stonybrook,
	pennapps,
	codeforgood,
	hackathons
} from '../common/constants';

const Content = props => (
	<div>
		<Row gradients={[princeton, nyu]} names={[hackathons[5], hackathons[4]]} />
		<Row
			gradients={[coloradoboulder, stonybrook]}
			names={[hackathons[3], hackathons[2]]}
		/>
		<Row
			gradients={[pennapps, codeforgood]}
			names={[hackathons[1], hackathons[0]]}
		/>
	</div>
);

export default Content;
