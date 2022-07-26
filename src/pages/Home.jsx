import React from 'react';
import HeadlineCard from '../components/Card/HeadlineCard';
import Category from '../components/Category/Category';
import Food from '../components/Food/Food';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<HeadlineCard />
			<Food />
			<Category />
		</>
	);
};

export default Home;
