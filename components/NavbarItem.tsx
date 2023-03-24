import React from "react";

interface NavbarItemProps {
	label: string;
	active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
	return (
		<div
			className={
				active
					? "text-sky-500 cursor-default"
					: "text-gray-200 hover:text-gray-500 cursor-pointer transition"
			}
		>
			{label}
		</div>
	);
};

export default NavbarItem;
