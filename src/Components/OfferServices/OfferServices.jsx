import React from 'react';
import './OfferServices.scss';
import productData from './productData';
import { ServicesData } from '../OfferServices/ServicesData/ServicesData';

export default function OfferServices() {
	return (
		<div className='services-container'>
			<div className='services-flex'>
				<div className='justify-services'>
					<h2>Предлагани услуги</h2>
					<hr />
				</div>

				<div className='services-cards'>
					{productData.map((productData) => (
						<ServicesData
							key={productData.id}
							type={productData.type}
							title={productData.title}
							image={productData.image}
							time={productData.time}
							price={productData.price}
							description={productData.description}
						/>
					))}
				</div>
				<div className='arrow-down'>
					<img
						src='./arrow-down.png'
						alt='arrow-down'
					/>
				</div>
			</div>
		</div>
	);
}
