import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './ServicesData.scss';

export function ServicesData(props) {
	const [showPopup, setShowPopup] = useState(false);
	const togglePopup = () => {
		setShowPopup(!showPopup);
	};

	const navigate = useNavigate();
	return (
		<div
			key={props.id}
			onClick={togglePopup}
			className='services-data'>
			<div className='cards-info-top'>
				<h3>{props.type} до</h3>
				<h2>{props.title}</h2>
			</div>

			<div className='cards-img'>
				<img
					src={props.image}
					alt='service-img'
				/>
			</div>
			<div className='cards-info-bottom'>
				<div className='cards-time-wallet'>
					<div className='cards-time'>
						<img
							src='./time.svg'
							alt='time'
						/>
						<p>Времетраене: {props.time}</p>
					</div>
					<div className='cards-wallet'>
						<img
							src='./wallet.svg'
							alt='wallet'
						/>
						<p>Цена: {props.price}лв.</p>
					</div>
				</div>
				<button
					onClick={() => {
						navigate('/about-services');
					}}>
					Виж повече
				</button>
			</div>

			{showPopup && (
				<div className='popup-container'>
					<div className='popup-row'>
						<div className='popup-left'>
							<div className='popup-info'>
								<h3>{props.type} до</h3>
								<h2>{props.title}</h2>
							</div>
							<div className='popup-img'>
								<img
									src={props.image}
									alt='service-img'
								/>
							</div>
						</div>
						<div className='popup-right'>
							<button onClick={togglePopup}>
								<img
									src='./close.png'
									alt='close'
								/>
							</button>
							<div className='popup-description'>
								<p>{props.description}</p>
							</div>
							<div className='popup-time-wallet'>
								<div className='cards-time'>
									<img
										src='./time.svg'
										alt='time'
									/>
									<p>Времетраене: {props.time}</p>
								</div>
								<div className='cards-wallet'>
									<img
										src='./wallet.svg'
										alt='wallet'
									/>
									<p>Цена: {props.price}лв.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
