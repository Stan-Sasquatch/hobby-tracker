import BookRatingsDAO from "@backend/crud/bookRatings/BookRatingsDAO";
import { parseItem, parseModel } from "@backend/utils";
import AllBookRatings from "bookRatings/components/all";
import { InferGetServerSidePropsType, NextPage } from "next/types";

export async function getServerSideProps() {
	const res = await BookRatingsDAO.getAllBookRatingsWithBookInfo();
	const data = parseModel(res.map((x) => ({ ...x, book: parseItem(x.book) })));
	return { props: { data } };
}

const BookRatingsPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
	return <AllBookRatings {...props} />;
};

export default BookRatingsPage;
