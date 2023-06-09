import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
	return (
		<>
			<div className='about-us'>
				<div className='flex-about-us'>
					<div className='content-about-us'>
						<div className='justify-about-us'>
							<h2>Малко повече за нас</h2>
							<hr />
						</div>
						<p>
							But I must explain to you how all this mistaken idea
							of denouncing pleasure and praising pain was born
							and I will give you a complete account of the
							system, and expound the actual teachings of the
							great explorer of the truth, the master-builder of
							human happiness. No one rejects, dislikes, or avoids
							pleasure itself, because it is pleasure, but because
							those who do not know how to pursue pleasure
							rationally encounter consequences that are extremely
							painful. Nor again is there anyone who loves or
							pursues or desires to obtain pain of itself, because
							it is pain, but because occasionally circumstances
							occur in which toil and pain can procure him some
							great pleasure. To take a trivial example, which of
							us ever undertakes laborious physical exercise,
							except to obtain some advantage from it? But who has
							any right to find fault with a man who chooses to
							enjoy a pleasure that has no annoying consequences,
							or one who avoids a pain that produces no resultant
							pleasure? On the other hand, we denounce with
							righteous indignation and dislike men who are so
							beguiled and demoralized by the charms of pleasure
							of the moment, so blinded by desire, that they
							cannot foresee the pain and trouble that are bound
							to ensue; and equal blame belongs to those who fail
							in their duty through weakness of will, which is the
							same as saying through shrinking from toil and.
						</p>
					</div>
					<div className='arrow-down'>
						<img
							src='./arrow-down.png'
							alt='arrow-down'
						/>
					</div>
				</div>
				<img
					className='girl-2'
					src='./2.png'
					alt='girl'
				/>
				<img
					className='arrow-1'
					src='./Group 647.svg'
					alt='arrow-1'
				/>
				<img
					className='arrow-2'
					src='./Group 647.svg'
					alt='arrow-2'
				/>
			</div>
		</>
	);
};

export default AboutUs;
