import { ViewModel } from "@backend/utils";
import { Button } from "@mui/material";
import { Book, BookRating } from "@prisma/client";
import { RatingWithBookInfo } from "bookRatings/models";
import DataTable, { Column } from "common/components/dataTable";
import { useRouter } from "next/router";
import React from "react";
import { FunctionComponent } from "react";
import CreateBookRatingModal from "./createBookRatingModal";

interface AllBookRatingsProps {
	data: ViewModel<BookRating & { book: ViewModel<Book> }>[];
}

const AllBookRatings: FunctionComponent<AllBookRatingsProps> = ({ data }) => {
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);

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

	function onOpen() {
		setModalOpen(true);
	}

	function onClose() {
		setModalOpen(false);
	}

	return (
		<>
			<Button variant="contained" onClick={onOpen}>
				Create New
			</Button>
			<CreateBookRatingModal open={modalOpen} onClose={onClose} />
			<DataTable data={mergedData} columns={columns} title={"Book Ratings"} />
		</>
	);
};

export default AllBookRatings;
