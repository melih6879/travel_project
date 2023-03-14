import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Gallery from '../Gallery/Gallery';
import Home from '../Home/Home';
import OfferServices from '../OfferServices/OfferServices';

const MainPage = () => {
	return (
		<>
			<Home />
			<AboutUs />
			<Gallery />
			<OfferServices />
			<ContactUs />
		</>
	);
};

export default MainPage;
