import React from 'react';
import Head from 'next/head';
import Normalize from './Normalize';

import { primaryColor, grey } from './constants';

const Navbar = props => (
	<div className="navbar">
		<Normalize />
		<div className="nav-item selected">Jeane Carlos</div>
		<div className="flex-gap" />
		<div className="nav-item right-margin selected">Hacks</div>
		<div className="nav-item">About</div>

		<Style />
	</div>
);

const Style = () => (
	<style jsx>{`
		.navbar {
			display: flex;
			align-items: center;
			height: 15vh;
			padding-left: 5%;
			padding-right: 5%;
		}

		.flex-gap {
			flex: 1;
		}

		.right-margin {
			margin-right: 1.5em;
		}
		.nav-item {
			color: ${grey};
			font-size: 1.6em;
			font-weight: 700;
		}

		.selected {
			color: ${primaryColor};
		}
	`}</style>
);

export default Navbar;
