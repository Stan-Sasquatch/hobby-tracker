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

	const author = volume.volumeInfo.authors[0];
	const title = volume.volumeInfo.title;

	const existingBook = await prisma.book.findUnique({
		where: {
			title_author: {
				title: title,
				author: author,
			},
		},
	});

	// eventually this will be replaced with auth
	const userId = process.env.DEFAULT_USER_ID;

	if (!userId) {
		const error = "No user Id to assign the rating to";
		return { data, success, error };
	}
	let bookId;
	let book;

	if (existingBook) {
		book = existingBook;
		bookId = existingBook.id;
		const existingRating = await prisma.bookRating.findUnique({
			where: {
				bookId_userId: {
					bookId,
					userId,
				},
			},
		});

		if (existingRating) {
			const error = "User already has a rating for this book";
			return { data, success, error };
		}
		console.log("Skipping creating this book as it already exists");
	} else {
		{
			book = await BooksDAO.createBook({
				author,
				title,
			});
			bookId = book.id;
		}
	}

	const ratingResponse = await BookRatingsDAO.createBookRating({
		bookId,
		rating,
		userId,
	});
	data = { ...ratingResponse, book };
	success = true;
	return { data, success, error };
};
