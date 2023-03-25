import React from "react";

import { ImageInterface } from "@/types";
import ImageCard from "@/components/ImageCard";
import { isEmpty } from "lodash";

interface ImageListProps {
	data: ImageInterface[];
	title: string;
}

const ImageList: React.FC<ImageListProps> = ({ data, title }) => {
	if (isEmpty(data)) {
		return null;
	}

	return (
		<div className="px-4 md:px-12 mt-4 space-y-8">
			<div>
				<p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
					{title}
				</p>
				<div className="grid lg:grid-cols-2 gap-2 ">
					{data.map((image) => (
						<ImageCard key={image.id} data={image} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ImageList;
