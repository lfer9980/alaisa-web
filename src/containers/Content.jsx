import React from 'react';



function Content({ children, type }) {
	return (
		<div className={`content ${type}`}>
			{children}
		</div>
	);
}

export { Content };