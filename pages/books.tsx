import BooksDAO from "@backend/crud/books/BooksDAO";
import { parseModel } from "@backend/utils";
import AllBooks from "books/components/all";
import { booksNavigation } from "books/models";
import NavLayout from "home/components/layout";
import { NextPage, InferGetServerSidePropsType } from "next";
import React from "react";

export async function getServerSideProps() {
	const res = await BooksDAO.getAllBooks();
	const data = parseModel(res);
	return { props: { data } };
}

const BooksPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
	return (
		<NavLayout navigation={booksNavigation} pathname={"/books"}>
			<AllBooks {...props} />
		</NavLayout>
	);
};

export default BooksPage;
