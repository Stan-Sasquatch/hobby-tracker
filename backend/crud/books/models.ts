import { Book } from ".prisma/client";

export type BookBaseModel = Omit<Book, "id" | "createdAt">;
export type BookViewModel = Omit<Book, "createdAt"> & { createdAt: string };
