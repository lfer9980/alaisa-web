import React from 'react';

import "@styles/containers/content.scss";

function Content({ children }) {
	return (
		<div className='content'>
			{children}
		</div>
	);
}

export { Content };