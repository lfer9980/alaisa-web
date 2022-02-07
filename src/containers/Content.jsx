import React from 'react';



function Content({ children, className }) {
	return (
		<div className={`content ${className}`}>
			{children}
		</div>
	);
}

export { Content };