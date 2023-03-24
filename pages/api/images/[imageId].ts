import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method !== "GET") {
			return res.status(405).end();
		}

		await serverAuth(req);

		const { imageId } = req.query;

		if (typeof imageId !== "string") {
			throw new Error("Invalid Id");
		}

		if (!imageId) {
			throw new Error("Missing Id");
		}

		const images = await prismadb.image.findUnique({
			where: {
				id: imageId,
			},
		});

		return res.status(200).json(images);
	} catch (error) {
		console.log(error);
		return res.status(500).end();
	}
}
