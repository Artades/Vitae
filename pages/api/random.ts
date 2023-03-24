import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "GET") {
		return res.status(405).end();
	}

	try {
		await serverAuth(req);

		const imageCount = await prismadb.image.count();
		const randomIndex = Math.floor(Math.random() * imageCount);

		const randomImages = await prismadb.image.findMany({
			take: 1,
			skip: randomIndex,
		});
		return res.status(200).json(randomImages[0]);
	} catch (error) {
		console.log(error);
		return res.status(400).end();
	}
}
