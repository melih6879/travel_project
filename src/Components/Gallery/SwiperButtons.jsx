import React from 'react';
import { useSwiper } from 'swiper/react';
import './SwipperButtons.scss';

export const SwiperButtons = () => {
	const swiper = useSwiper();
	return (
		<div className='swiper-buttons'>
			<button onClick={() => swiper.slidePrev()}>
				<img
					src='./Group 645.svg'
					alt='prev'
				/>
			</button>
			<button onClick={() => swiper.slideNext()}>
				<img
					src='./Group 646.svg'
					alt='next'
				/>
			</button>
		</div>
	);
};

export default SwiperButtons;
