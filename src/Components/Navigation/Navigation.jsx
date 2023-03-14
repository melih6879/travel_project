import { Link } from 'react-router-dom';
import './Navigation.scss';

import { FaBars } from 'react-icons/fa';
import { useRef } from 'react';

const Navigation = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive-nav');
	};

	return (
		<nav className='navbar'>
			<div
				className='logo'
				onClick={() => !showNavbar}>
				<div className='logo-arrow'>
					<img
						src='./Group 647.svg'
						alt='arrow'
					/>
				</div>
				<Link to='/'>
					<img
						src='./2.svg'
						alt='logo'
					/>
				</Link>
			</div>

			<div
				ref={navRef}
				className='navigation'>
				<ul onClick={showNavbar}>
					<li>
						<Link to='/about-us'>За нас</Link>
					</li>

					<li>
						<Link to='/contact-us'>Контакти</Link>
					</li>
				</ul>
			</div>

			<button
				onClick={showNavbar}
				className='nav-btn'>
				<FaBars />
			</button>
		</nav>
	);
};

export default Navigation;
