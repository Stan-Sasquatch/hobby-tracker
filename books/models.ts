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
	title: z.string().optional(),
	subtitle: z.string().optional(),
	authors: z.string().array().optional(),
});

const Volume = z.object({
	id: z.string(),
	volumeInfo: VolumeInfo,
});

export const GoogleVolumesResponse = z.object({
	items: Volume.array().optional(),
});

export type GoogleVolumesResponse = z.infer<typeof GoogleVolumesResponse>;
export type GoogleVolume = z.infer<typeof Volume>;
