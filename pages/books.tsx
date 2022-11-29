import { getAllBooks } from "api/booksApi";
import { NextPage, InferGetServerSidePropsType } from "next";

export async function getServerSideProps() {
	const data = await getAllBooks();
	return { props: { data } };
}

const BooksPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
	console.table(props.data);

	return <h1>Books</h1>;
};

export default BooksPage;
