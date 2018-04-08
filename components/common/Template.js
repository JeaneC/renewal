// This file is not an actual component but a template for creating new ones
import React from 'react';

import { primaryColor } from '../common/constants';

const ComponentName = props => (
	<div className="container">
		<Style />
	</div>
);

const Style = () => (
	<style jsx>{`
		.container {
			background-color: black;
		}
	`}</style>
);

export default ComponentName;
