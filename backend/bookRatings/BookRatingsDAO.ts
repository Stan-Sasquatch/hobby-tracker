import { BookRating } from ".prisma/client";
import prisma from "../../prisma/prisma";
import { BookingRatingBaseModel } from "./models";

export default class BookRatingsDAO {
	static async createBookRating(data: BookingRatingBaseModel) {
		return await prisma.bookRating.create({ data });
	}

	static async getAllBookRatings() {
		return await prisma.bookRating.findMany({
			orderBy: { createdAt: "desc" },
		});
	}

	static async getBookRatingById(id: string) {
		return await prisma.bookRating.findUnique({
			where: { id },
		});
	}

	static async updateBookRating(data: BookRating) {
		return await prisma.bookRating.update({
			where: { id: data.id },
			data,
		});
	}

	static async deleteBookRating(id: string) {
		return await prisma.bookRating.delete({
			where: { id },
		});
	}
}
