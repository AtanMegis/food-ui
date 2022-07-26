import React, { useState } from 'react';
import {
	AiOutlineMenu,
	AiOutlineSearch,
	AiOutlineClose,
	AiFillTag,
} from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const navHandler = () => {
		setNav(!nav);
	};

	return (
		<div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
			{/* left side */}
			<div className=" flex items-center">
				<div className="cursor-pointer pt-1.5">
					<AiOutlineMenu size={30} onClick={navHandler} />
				</div>
				<h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
					Five <span className="font-bold"> Resto</span>
				</h1>
				<div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
					<p className="bg-black text-white rounded-full p-2">
						Delivery
					</p>
					<p className="p-2">Pickup</p>
				</div>
			</div>

			{/* Search Input */}
			<div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
				<AiOutlineSearch size={30} />
				<input
					className="bg-transparent p-2 w-full focus:outline-none"
					type="text"
					placeholder="Search food"
				/>
			</div>

			{/* Cart Button */}
			<button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
				Cart
				<div className="px-1.5">
					<BsFillCartFill size={25} />
				</div>
			</button>

			{/* Mobile Menu */}
			{/* Overlay */}
			{nav && (
				<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			)}

			{/* Side Drawer Menu */}
			<div
				className={
					nav
						? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
						: 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
				}
			>
				<AiOutlineClose
					onClick={navHandler}
					size={30}
					className="absolute right-4 top-4 cursor-pointer"
				/>
				<h2 className="text-2xl p-4">
					Five<span className="font-bold"> Resto</span>
				</h2>
				<nav>
					<ul className="flex flex-col p-4 text-gray-800">
						<li className="text-xl py-4 flex">
							<TbTruckDelivery
								size={30}
								className="mr-4 pt-0.5"
							/>
							Orders
						</li>
						<li className="text-xl py-4 flex">
							<MdFavorite
								size={30}
								className="mr-4 pt-0.5"
							/>
							Favorites
						</li>
						<li className="text-xl py-4 flex">
							<FaWallet
								size={30}
								className="mr-4 pt-0.5"
							/>
							Wallet
						</li>
						<li className="text-xl py-4 flex">
							<AiFillTag
								size={30}
								className="mr-4 pt-0.5"
							/>
							Promotions
						</li>
						<li className="text-xl py-4 flex">
							<MdHelp size={30} className="mr-4 pt-0.5" />
							Help
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
