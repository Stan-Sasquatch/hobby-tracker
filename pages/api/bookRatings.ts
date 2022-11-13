import type { NextApiRequest, NextApiResponse } from "next";
import BookRatingsController from "./../../backend/bookRatings/BookRatingsController";

export default function bookRatingsHandler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case "GET":
			return BookRatingsController.getAllBookRatings(req, res);
		case "POST":
			return BookRatingsController.createBookRating(req, res);
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
