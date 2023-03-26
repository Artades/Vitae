import Link from "next/link";
import React from "react";

interface NavbarItemProps {
	href: string;
	label: string;
	active?: boolean;
	disabled?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, href, disabled }) => {
	return (
		<Link href={href}>
			<div
				className={
					// active
					// 	? "text-sky-600 cursor-default"
					// 	: "text-gray-200 hover:text-gray-500 cursor-pointer transition"
					disabled
						? "text-neutral-600 cursor-not-allowed"
						: "text-gray-200 hover:text-gray-500 cursor-pointer transition"
				}
			>
				{label}
			</div>
		</Link>
	);
};

export default NavbarItem;
