import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Gallery from '../Gallery/Gallery';
import OfferServices from '../OfferServices/OfferServices';
import MainPage from './MainPage';

const Layout = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<MainPage />}
			/>
			<Route
				path='/about-us'
				element={<AboutUs />}
			/>
			<Route
				path='/gallery'
				element={<Gallery />}
			/>
			<Route
				path='/offered-services'
				element={<OfferServices />}
			/>
			<Route
				path='/contact-us'
				element={<ContactUs />}
			/>
		</Routes>
	);
};

export default Layout;
