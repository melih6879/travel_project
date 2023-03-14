import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

// Components
import Navigation from './Components/Navigation/Navigation';
// import Home from './Components/Home/Home';
// import AboutUs from './Components/AboutUs/AboutUs';
// import Gallery from './Components/Gallery/Gallery';
// import OfferServices from './Components/OfferServices/OfferServices';
// import ContactUs from './Components/ContactUs/ContactUs';
// import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Layout />
			<Footer />
			{/* <Home />
			<AboutUs />
			<Gallery />
			<OfferServices />
			<ContactUs />
			<Footer /> */}
		</div>
	);
}

export default App;
