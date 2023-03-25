import Link from "next/link";
import React from "react";

interface NavbarItemProps {
	href: string;
	label: string;
	active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, href }) => {
	return (
		<Link href={href}>
			<div
				className={
					active
						? "text-sky-600 cursor-default"
						: "text-gray-200 hover:text-gray-500 cursor-pointer transition"
				}
			>
				{label}
			</div>
		</Link>
	);
};

export default NavbarItem;
