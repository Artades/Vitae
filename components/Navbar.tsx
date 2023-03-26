import React, { useCallback, useEffect, useState } from "react";
import {BsChevronDown } from "react-icons/bs";
import AccountMenu from "@/components/AccountMenu";
import MobileMenu from "@/components/MobileMenu";
import NavbarItem from "@/components/NavbarItem";
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

const TOP_OFFSET = 66;

const Navbar = () => {
	const [showAccountMenu, setShowAccountMenu] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [showBackground, setShowBackground] = useState(false);
	
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= TOP_OFFSET) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);


	const toggleAccountMenu = useCallback(() => {
		setShowAccountMenu((current) => !current);
	}, []);

	const toggleMobileMenu = useCallback(() => {
		setShowMobileMenu((current) => !current);
	}, []);

	return (
		<nav className="w-full fixed z-40">
			<div
				className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
					showBackground ? "bg-zinc-900 bg-opacity-90" : ""
				}`}
			>
				<img src="/images/logo.svg" className="h-5 lg:h-8" alt="Logo" />
				<div className="flex-row ml-8 gap-7 hidden lg:flex">
					<NavbarItem href="/" label="Home" active />
					<NavbarItem href="/" label="Videos" disabled />
					<NavbarItem href="/" label="New & Popular" disabled />
					<NavbarItem href="/favorites" label="My List" />
				</div>
				<div
					onClick={toggleMobileMenu}
					className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
				>
					<p className="text-white text-sm">Browse</p>
					<BsChevronDown
						className={`w-4   transition ${
							showMobileMenu ? "rotate-180 text-sky-600" : "rotate-0 text-white"
						}`}
					/>
					<MobileMenu visible={showMobileMenu} />
				</div>
				<div className="flex flex-row ml-auto gap-7 items-center">
					<div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
						<IoSearchOutline className=" ml-4 w-6 h-6 text-neutral-600 cursor-not-allowed" />
					</div>
					<Link href="/settings" className="w-full">
						<div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
							<IoSettingsOutline className="w-6 h-6" />
						</div>
					</Link>
					<div
						onClick={toggleAccountMenu}
						className="flex flex-row items-center gap-2 cursor-pointer relative"
					>
						<div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
							<img src="/images/profile-blue.png" alt="" />
						</div>
						<BsChevronDown
							className={`w-4 text-white fill-white transition ${
								showAccountMenu ? "rotate-180" : "rotate-0"
							}`}
						/>
						<AccountMenu visible={showAccountMenu} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
