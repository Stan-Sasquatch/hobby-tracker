import type { NextApiRequest, NextApiResponse } from "next";
import BookRatingsDAO from "@backend/crud/bookRatings/BookRatingsDAO";
import { handleTryCatch } from "@backend/utils";
import { BookRatingBaseModel } from "@backend/crud/bookRatings/models";

export default function bookRatingsHandler(req: NextApiRequest, res: NextApiResponse) {
	const { method, query, body } = req;

	if (!query.id) {
		throw new Error("Id not passed correctly");
	}

	if (Array.isArray(query.id)) {
		throw new Error("Nested query not implemented for this route");
	}

	switch (method) {
		case "GET":
			return handleTryCatch(BookRatingsDAO.getBookRatingById(query.id), res);
		case "PUT":
			return handleTryCatch(BookRatingsDAO.updateBookRating(body as BookRatingBaseModel, query.id), res);
		case "DELETE":
			return handleTryCatch(BookRatingsDAO.deleteBookRating(query.id), res);
		default:
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
