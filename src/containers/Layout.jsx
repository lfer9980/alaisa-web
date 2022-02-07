import React from 'react';

import "@styles/containers/layout.scss";

function Layout({ children }) {
	return (
		<div className='layout'>
			{children}
		</div>
	);
}

export { Layout };
