import prisma from "../../prisma/prisma";
import { BookBaseModel } from "./models";

export default class BooksDAO {
	static async createBook(data: BookBaseModel) {
		return await prisma.book.create({ data });
	}

	static async getAllBooks() {
		return await prisma.book.findMany({
			orderBy: { createdAt: "desc" },
		});
	}

	static async getBookById(id: string) {
		return await prisma.book.findUnique({
			where: { id },
		});
	}

	static async updateBook(data: BookBaseModel, id: string) {
		return await prisma.book.update({
			where: { id },
			data,
		});
	}

	static async deleteBook(id: string) {
		return await prisma.book.delete({
			where: { id },
		});
	}
}
