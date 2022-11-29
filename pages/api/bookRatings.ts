import type { NextApiRequest, NextApiResponse } from "next";
import BookRatingsDAO from "@backend/crud/bookRatings/BookRatingsDAO";
import { BookRatingBaseModel } from "@backend/crud/bookRatings/models";
import { handleTryCatch } from "@backend/utils";

export default function bookRatingsHandler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case "GET":
			return handleTryCatch(BookRatingsDAO.getAllBookRatings(), res);
		case "POST":
			const model: BookRatingBaseModel = req.body;
			return handleTryCatch(BookRatingsDAO.createBookRating(model), res);
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
