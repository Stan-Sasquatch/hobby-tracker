import type { NextApiRequest, NextApiResponse } from "next";
import { handleTryCatch } from "@backend/utils";
import BooksDAO from "@backend/crud/books/BooksDAO";
import { BookBaseModel } from "@backend/crud/books/models";
export default function booksHandler(req: NextApiRequest, res: NextApiResponse) {
	const { method, query, body } = req;

	if (!query.id) {
		throw new Error("Id not passed correctly");
	}

	if (Array.isArray(query.id)) {
		throw new Error("Nested query not implemented for this route");
	}

	switch (method) {
		case "GET":
			return handleTryCatch(BooksDAO.getBookById(query.id), res);
		case "PUT":
			return handleTryCatch(BooksDAO.updateBook(body as BookBaseModel, query.id), res);
		case "DELETE":
			return handleTryCatch(BooksDAO.deleteBook(query.id), res);
		default:
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
