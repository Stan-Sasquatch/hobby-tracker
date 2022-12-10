import { ViewModel } from "@backend/utils";
import { Book, BookRating } from "@prisma/client";
import { RatingWithBookInfo } from "bookRatings/models";
import DataTable, { Column } from "common/components/dataTable";
import { FunctionComponent } from "react";

interface AllBookRatingsProps {
	data: ViewModel<BookRating & { book: ViewModel<Book> }>[];
}

const AllBookRatings: FunctionComponent<AllBookRatingsProps> = ({ data }) => {
	const mergedData: RatingWithBookInfo[] = data.map((x) => {
		const { id, rating, createdAt } = x;
		const { author, title } = x.book;

		return {
			id,
			rating,
			createdAt,
			author,
			title,
		};
	});
	const columns: Column<RatingWithBookInfo>[] = [
		{
			field: "title",
			headerName: "Title",
			width: 150,
		},
		{
			field: "author",
			headerName: "Author",
			width: 150,
		},
		{
			field: "rating",
			headerName: "Rating",
			width: 150,
		},
	];
	return <DataTable data={mergedData} columns={columns} title={"Book Ratings"} />;
};

export default AllBookRatings;
