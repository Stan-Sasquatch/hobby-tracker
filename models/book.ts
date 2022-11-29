import { z } from "zod";

export const Book = z.object({
	id: z.string().uuid(),
	createdAt: z.string(),
	title: z.string(),
	author: z.string(),
});

export type Book = z.infer<typeof Book>;