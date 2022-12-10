import { ViewModel } from "@backend/utils";
import { Book, BookRating } from "@prisma/client";
import { RatingWithBookInfo } from "bookRatings/models";
import DataTable, { Column } from "common/components/dataTable";
import { FunctionComponent } from "react";

interface AllBookRatingsProps {
	data: ViewModel<BookRating & { book: ViewModel<Book> }>[];
}

const AllBookRatings: FunctionComponent<AllBookRatingsProps> = ({ data }) => {
	const mergedData: RatingWithBookInfo[] = data.map((x) => ({
		id: x.id,
		rating: x.rating,
		createdAt: x.createdAt,
		author: x.book.author,
		title: x.book.title,
	}));
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
