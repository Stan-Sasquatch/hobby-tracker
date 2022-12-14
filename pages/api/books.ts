import type { NextApiRequest, NextApiResponse } from "next";
import { handleTryCatch } from "@backend/utils";
import BooksDAO from "@backend/crud/books/BooksDAO";
import { BookBaseModel } from "@backend/crud/books/models";

export default function bookRatingsHandler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case "GET":
			return handleTryCatch(BooksDAO.getAllBooks(), res);
		case "POST":
			const model: BookBaseModel = req.body;
			return handleTryCatch(BooksDAO.createBook(model), res);
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
