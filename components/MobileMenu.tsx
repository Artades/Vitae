import Link from "next/link";
import React from "react";

interface MobileMenuProps {
	visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
	if (!visible) {
		return null;
	}

	return (
		<div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
			<div className="flex flex-col gap-4">
				<Link href="/">
					<div className="px-3 text-center text-white hover:underline">
						Home
					</div>
				</Link>

				{/* <Link href="/">
					<div className="px-3 text-center text-neutral-500 hover:underline cursor-not-allowed">
						Videos
					</div>
				</Link>

				<Link href="/">
					<div className="px-3 text-center text-neutral-500 hover:underline cursor-not-allowed">
						New & Popular
					</div>
				</Link> */}
				<Link href="/favorites">
					<div className="px-3 text-center text-white hover:underline">
						My List
					</div>
				</Link>
			</div>
		</div>
	);
};

export default MobileMenu;
