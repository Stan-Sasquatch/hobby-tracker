import { ViewModel } from "@backend/utils";
import { Book } from "@prisma/client";
import DataTable, { Column } from "common/components/dataTable";
import { FunctionComponent } from "react";

interface AllBooksProps {
	data: ViewModel<Book>[];
}

const AllBooks: FunctionComponent<AllBooksProps> = ({ data }) => {
	const columns: Column<Book>[] = [
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
	];
	return <DataTable data={data} columns={columns} title={"Books"} />;
};

export default AllBooks;
