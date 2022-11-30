import { Navigation } from "common/models";
import { z } from "zod";

export const Book = z.object({
	id: z.string().uuid(),
	createdAt: z.string(),
	title: z.string(),
	author: z.string(),
});

export type Book = z.infer<typeof Book>;

export const booksNavigation: Navigation = {
	home: { path: "/", title: "All Books" },
	books: { path: "/search", title: "Search Books" },
};
