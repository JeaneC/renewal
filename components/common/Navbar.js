import React from 'react';
import Head from 'next/head';
import Normalize from './Normalize';
import Router from 'next/router';

import { primaryColor, grey } from './constants';

const Navbar = ({ name, hacks, about }) => {
	let nameClasses = name ? 'nav-item selected' : 'nav-item';
	let aboutClasses = about ? 'nav-item selected' : 'nav-item';
	let hackClasses = hacks
		? 'nav-item right-margin selected'
		: 'nav-item right-margin';

	return (
		<div className="navbar">
			<Normalize />
			<div className={nameClasses} onClick={() => Router.push('/')}>
				Jeane Carlos
			</div>
			<div className="flex-gap" />
			<div className={hackClasses} onClick={() => Router.push('/')}>
				Hacks
			</div>
			<div className={aboutClasses} onClick={() => Router.push('/about')}>
				About
			</div>

			<Style />
		</div>
	);
};

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
			font-size: 1.4em;
			font-weight: 700;
			cursor: pointer;
		}

		.selected {
			color: ${primaryColor};
		}
	`}</style>
);

export default Navbar;
