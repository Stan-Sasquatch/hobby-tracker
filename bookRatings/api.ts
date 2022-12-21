import { Response } from "@backend/crud/common/models";
import { Book, BookRating } from "@prisma/client";
import axios from "axios";
import { GoogleVolume } from "books/models";
import settings from "localSettings.json";

const api = `${settings.DEV_URL}/api/bookRatings`;

export async function CreateNewBookRating(volume: GoogleVolume, rating: number) {
	const { data } = await axios.post<
		Response<
			BookRating & {
				book: Book;
			}
		>
	>(`${api}/new`, {
		volume,
		rating,
	});

	return data;
}
