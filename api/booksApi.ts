import axios from "axios";
import { Book } from "models/book";
import { z } from "zod";

const baseUri = process.env.DEV_URL;
const booksPath = `${baseUri}/api/books`;

export async function getAllBooks(): Promise<Book[]> {
	const res = await axios.get(booksPath);
	const books = z.array(Book).parse(res.data);
	return books;
}
