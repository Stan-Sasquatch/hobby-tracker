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

const VolumeInfo = z.object({
	title: z.string(),
	subtitle: z.string().optional(),
	authors: z.string().array(),
});

const Volume = z.object({
	id: z.string(),
	volumeInfo: VolumeInfo,
});

export const GoogleVolume = z.object({
	totalItems: z.number(),
	items: Volume.array().optional(),
});

export type GoogleVolume = z.infer<typeof GoogleVolume>;
