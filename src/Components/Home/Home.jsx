import React from 'react';
import './Home.scss';

const Home = () => {
	return (
		<>
			<div className='home'>
				<div className='flex-find-new-places'>
					<div className='find-new-places'>
						<div className='justify-find-new-places'>
							<h1>Открий нови вълнуващи места с нас!</h1>
							<img
								className='arrow-1'
								src='./1.svg'
								alt='arrow'
							/>
						</div>
					</div>

					<div className='girl-picture'>
						<img
							src='./Group 650.png'
							alt='girl'
						/>
					</div>
					<button className='facebook-icon'>
						<div className='img-facebook-icon'>
							<img
								src='./facebook.png'
								alt='facebook-icon'
							/>
						</div>
						<h2>Задай въпрос</h2>
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
