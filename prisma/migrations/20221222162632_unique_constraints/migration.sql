/*
  Warnings:

  - A unique constraint covering the columns `[title,author]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bookId,userId]` on the table `BookRating` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Book_title_author_key" ON "Book"("title", "author");

-- CreateIndex
CREATE UNIQUE INDEX "BookRating_bookId_userId_key" ON "BookRating"("bookId", "userId");
