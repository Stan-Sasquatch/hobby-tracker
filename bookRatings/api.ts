import { Book, BookRating } from "@prisma/client";
import axios from "axios";
import { GoogleVolume } from "books/models";
import settings from "localSettings.json";

const api = `${settings.DEV_URL}/api`;
export async function CreateBookRating(volume: GoogleVolume, rating: number) {
	if (!volume.volumeInfo?.authors?.some((x) => x) || !volume.volumeInfo?.title) {
		return "Can't create a rating for a book that is missing an author or title";
	}

	const newBookModel = {
		author: volume.volumeInfo.authors[0],
		title: volume.volumeInfo.title,
	};
	const newBookResponse = await axios.post<Book>(`${api}/books`, newBookModel);

	const newBookRatingModel = {
		bookId: newBookResponse.data.id,
		rating,
		userId: settings.DEFAULT_USER_ID,
	};

	const bookRating = await axios.post<BookRating>(`${api}/bookRatings`, newBookRatingModel);

	return `Successfully created a rating of ${bookRating.data.rating} for ${volume.volumeInfo.title}`;
}
