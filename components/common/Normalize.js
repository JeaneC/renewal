import React from 'react';
import Head from 'next/head';

const Normalize = props => (
	<div>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
		</Head>
		<style jsx global>{`
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
