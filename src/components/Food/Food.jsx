import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { data } from '../../helper/data';

const Food = () => {
	const [food, setFood] = useState(data);
	const [search, setSearch] = useState('');

	const filterType = (category) => {
		setFood(
			data.filter((item) => {
				return item.category === category;
			})
		);
	};

	const filterPrice = (price) => {
		setFood(
			data.filter((item) => {
				return item.price === price;
			})
		);
	};

	return (
		<>
			<div className="max-w-[1640px] m-auto px-4 py-12">
				<h1 className="text-orange-600 font-bold text-4xl text-center">
					Top Rated Menu Items
				</h1>
				<div className="flex justify-center my-5">
					<div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
						<AiOutlineSearch size={30} />
						<input
							className="bg-transparent p-2 w-full focus:outline-none"
							type="text"
							placeholder="Search food"
							onClick={(e) => setSearch(e.target.value)}
						/>
					</div>
				</div>

				{/* Filter Row */}
				<div className="flex flex-col lg:flex-row justify-between">
					{/* Filter Type */}
					<div>
						<p className="font-bold text-gray-700 mt-12">
							Filter Type
						</p>
						<div className="flex justfiy-between flex-wrap">
							<button
								onClick={() => {
									setFood(data);
								}}
								className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
							>
								All
							</button>
							<button
								onClick={() => {
									filterType('burger');
								}}
								className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
							>
								Burgers
							</button>
							<button
								onClick={() => {
									filterType('pizza');
								}}
								className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
							>
								Pizza
							</button>
							<button
								onClick={() => {
									filterType('salad');
								}}
								className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
							>
								Salads
							</button>
							<button
								onClick={() => {
									filterType('chicken');
								}}
								className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
							>
								Chicken
							</button>
						</div>
					</div>

					{/* Filter Price */}
					<div>
						<p className="font-bold text-gray-700 mt-12">
							Filter Price
						</p>
						<div className="flex justify-between max-w-[390px] w-full">
							<button
								onClick={() => {
									filterPrice('50k');
								}}
								className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
							>
								All 50k
							</button>
							<button
								onClick={() => {
									filterPrice('99k');
								}}
								className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
							>
								All 99k
							</button>
							<button
								onClick={() => {
									filterPrice('150k');
								}}
								className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
							>
								All 150k
							</button>
						</div>
					</div>
				</div>

				{/* Display Foods */}
				<div className="grid grid-cols-2 lg: gridcols-4 gap-6 pt-4">
					{food
						.filter((item) => {
							return search.toLowerCase() === ''
								? item
								: item.name
										.toLowerCase()
										.includes(search);
						})
						.map((item) => (
							<div
								className="border shadow-lg rounded-lg hover:scale-105 duration-300"
								key={item.id}
							>
								<img
									className="w-full h-[300px] object-cover rounded-t-lg"
									src={item.image}
									alt={item.name}
								/>
								<div className="flex justify-between px-2 py-4">
									<p className="font-bold">
										{item.name}
									</p>
									<p>
										<span className="bg-orange-500 text-white p-1 rounded-full">
											{item.price}
										</span>
									</p>
								</div>
							</div>
						))}
					<div></div>
				</div>
			</div>
		</>
	);
};

export default Food;
