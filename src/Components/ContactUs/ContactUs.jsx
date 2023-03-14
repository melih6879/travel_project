import React from 'react';
import './ContactUs.scss';

const ContactUs = () => {
	return (
		<>
			<div className='contact-us'>
				<div className='row-contact-us'>
					<div className='img-bag'>
						<img
							src='./Mask Group 21.jpg'
							alt='bag'
						/>
					</div>
					<div className='img-background'>
						<img
							src='./Mask Group 22.jpg'
							alt='background'
						/>
					</div>
					<div className='content-contact-us'>
						<div className='h2-contact-us'>
							<h2>Не се колебай свържи се с нас</h2>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Doloribus quia excepturi voluptatum enim. Quo
							explicabo eius labore magnam at id, quisquam
							architecto eaque nulla nam rem ea odit ipsum
							tenetur.
						</p>
						<button className='facebook-icon'>
							<h2>Пиши ни</h2>
							<div className='img-facebook-icon'>
								<img
									src='./facebook.png'
									alt='facebook-icon'
								/>
							</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
