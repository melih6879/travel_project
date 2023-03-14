import React from 'react';

export default function Images(props) {
	console.log(props);
	return (
		<div className='card'>
			<img
				className='product--image'
				key={props.id}
				src={props.url}
				alt='group'
			/>
		</div>
	);
}
