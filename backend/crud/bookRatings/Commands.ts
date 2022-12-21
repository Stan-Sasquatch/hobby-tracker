import { BookRating, Book } from "@prisma/client";
import BooksDAO from "../books/BooksDAO";
import BookRatingsDAO from "./BookRatingsDAO";
import { CreateNewBookAndRatingModel } from "./models";
import { Response } from "../common/models";

export const CreateNewBookAndRating = async (
	model: CreateNewBookAndRatingModel
): Promise<Response<BookRating & { book: Book }>> => {
	const { volume, rating } = model;
	let error = null;
	let data = null;
	let success = false;

	if (!volume.volumeInfo?.authors?.some((x) => x) || !volume.volumeInfo?.title) {
		const error = "Can't create a rating for a book that is missing an author or title";
		return { data, success, error };
	}

	// eventually this will be replaced with auth
	const userId = process.env.DEFAULT_USER_ID;

	if (!userId) {
		const error = "No user Id to assign the rating to";
		return { data, success, error };
	}

	const newBookModel = {
		author: volume.volumeInfo.authors[0],
		title: volume.volumeInfo.title,
	};
	const newBookResponse = await BooksDAO.createBook(newBookModel);

	const newBookRatingModel = {
		bookId: newBookResponse.id,
		rating,
		userId,
	};

	const ratingResponse = await BookRatingsDAO.createBookRating(newBookRatingModel);
	data = { ...ratingResponse, book: newBookResponse };
	success = true;
	return { data, success, error };
};
