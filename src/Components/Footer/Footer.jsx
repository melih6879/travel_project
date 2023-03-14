import React from 'react';
import './Footer.scss';

const Footer = () => {
	return (
		<>
			<div className='footer'>
				<div className='footer-row'>
					<div className='footer-logo'>
						<img
							src='./2.svg'
							alt='logo'
						/>
					</div>

					<div className='footer-arrow'>
						<img
							src='./1.svg'
							alt='arrow'
						/>
					</div>

					<div className='footer-contacts'>
						<div className='footer-info'>
							<a href='/'>
								<h3>+359 875 625 985</h3>
							</a>
							<img
								src='./telephone-call.png'
								alt='telephone-call'
							/>
						</div>
						<div className='footer-info'>
							<a href='/'>
								<h3>varna_travel@gmail.com</h3>
							</a>
							<img
								src='./mail.png'
								alt='mail'
							/>
						</div>
						<div className='footer-info'>
							<a href='/'>
								<h3>Варна, ул. Някоя си 23</h3>
							</a>
							<img
								src='./placeholder.png'
								alt='placeholder'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
