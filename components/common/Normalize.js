import React from 'react';
import Head from 'next/head';

const Normalize = props => (
	<div>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
		</Head>
		<style jsx global>{`
			@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400');

			* {
				box-sizing: border-box;
				margin: 0;
				padding: 0;
				font-family: 'Georgia';
				font-size: 16px;
			}
		`}</style>
	</div>
);

export default Normalize;
