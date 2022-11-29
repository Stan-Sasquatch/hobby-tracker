import { Book } from ".prisma/client";

export type BookBaseModel = Omit<Book, "id" | "createdAt">;
