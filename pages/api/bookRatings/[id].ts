import type { NextApiRequest, NextApiResponse } from "next";
import BookRatingsController from "../../../backend/bookRatings/BookRatingsController";

export default function bookRatingsHandler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case "GET":
			return BookRatingsController.getBookRating(req, res);
		case "PUT":
			return BookRatingsController.updateBookRating(req, res);
		case "DELETE":
			return BookRatingsController.deleteBookRating(req, res);
		default:
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
