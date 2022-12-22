import { BookRating } from ".prisma/client";
import { GoogleVolume } from "books/models";

export type BookRatingBaseModel = Omit<BookRating, "id" | "createdAt">;
export type CreateNewBookAndRatingModel = { userEmail: string; volume: GoogleVolume; rating: number };
