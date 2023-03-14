import React from 'react';
import './Gallery.scss';

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Images from './Images';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { images } from './data';
import SwiperButtons from './SwiperButtons';

const Gallery = () => {
	// const imagesData = images.map(
	// 	(item) => {
	// 		return (
	// 			<Images
	// 				key={item.id}
	// 				url={item.imageUrl}
	// 			/>
	// 		);
	// 	}

	// 	// <h3>{JSON.stringify(images)}</h3>
	// );

	// console.log(imagesData.props);
	return (
		<>
			<div className='gallery-container'>
				<div className='gallery-flex'>
					<div className='justify-gallery'>
						<h2>Галерия</h2>
						<hr />
					</div>

					<Swiper
						// install Swiper modules
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={0}
						slidesPerView={1}
						breakpoints={{
							640: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
						navigation
						pagination={{ clickable: true }}
						// scrollbar={{ draggable: true }}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log('slide change')}>
						{images.map((images) => (
							<SwiperSlide key={images.id}>
								<div className='galery-img'>
									<img
										src={images.imageUrl}
										alt={images.alt}
									/>
								</div>
							</SwiperSlide>
						))}
						<SwiperButtons />
					</Swiper>

					{/* <Carousel
						responsive={responsive}
						showDots={true}
						// removeArrowOnDeviceType={['tablet', 'mobile']}
					>
						{imagesData}
					</Carousel> */}
				</div>
			</div>
		</>
	);
};

export default Gallery;
