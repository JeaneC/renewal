import React from 'react';

import { primaryColor, gold } from '../common/constants';

const Medal = ({text}) => (
	<div className="medal">
    {text}
		<Style />
	</div>
);

const Style = () => (
	<style jsx>{`
		.medal {
      display: flex;
      justify-content: center;
      align-items:center;
      width: 13rem;
      height: 2.1rem;
      margin-top: 0.65rem;
      font-family: 'Open Sans';
      font-weight: bold;
      font-size: 0.9rem;
			background-color: ${gold};
		}

    .medal:first-child {
      margin-top: 1.2rem;
    }
	`}</style>
);

export default Medal;
