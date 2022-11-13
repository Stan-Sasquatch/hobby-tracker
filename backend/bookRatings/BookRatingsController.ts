import { BookRating } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { handleTryCatch } from "../utils";
import BookRatingsDAO from "./BookRatingsDAO";
import { BookingRatingBaseModel as BookRatingBaseModel } from "./models";

export default class BookRatingsController {
	static getBookRating(req: NextApiRequest, res: NextApiResponse<any>) {
		throw new Error("Method not implemented.");
	}
	static updateBookRating(req: NextApiRequest, res: NextApiResponse<any>) {
		const model: BookRating = req.body;
		handleTryCatch(BookRatingsDAO.updateBookRating(model), res);
	}
	static deleteBookRating(req: NextApiRequest, res: NextApiResponse<any>) {
		const id = req.query.id as string;
		handleTryCatch(BookRatingsDAO.deleteBookRating(id), res);
	}
	static async createBookRating(req: NextApiRequest, res: NextApiResponse<any>) {
		const model: BookRatingBaseModel = req.body;
		handleTryCatch(BookRatingsDAO.createBookRating(model), res);
	}
	static async getAllBookRatings(req: NextApiRequest, res: NextApiResponse) {
		handleTryCatch(BookRatingsDAO.getAllBookRatings(), res);
	}
}
