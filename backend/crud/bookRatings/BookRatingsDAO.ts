import { BookRatingBaseModel } from "./models";
import prisma from "prisma/prisma";

export default class BookRatingsDAO {
	static async createBookRating(data: BookRatingBaseModel) {
		return await prisma.bookRating.create({ data });
	}

	static async getAllBookRatings() {
		return await prisma.bookRating.findMany({
			orderBy: { createdAt: "desc" },
		});
	}

	static async getAllBookRatingsWithBookInfo() {
		return await prisma.bookRating.findMany({
			include: { book: true },
			orderBy: { createdAt: "desc" },
		});
	}

	static async getBookRatingById(id: string) {
		return await prisma.bookRating.findUnique({
			where: { id },
		});
	}

	static async updateBookRating(data: BookRatingBaseModel, id: string) {
		return await prisma.bookRating.update({
			where: { id },
			data,
		});
	}

	static async deleteBookRating(id: string) {
		return await prisma.bookRating.delete({
			where: { id },
		});
	}
}
