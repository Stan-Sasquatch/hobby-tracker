import { ViewModel } from "@backend/utils";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Book } from "@prisma/client";
import { FunctionComponent } from "react";

interface AllBooksProps {
	data: ViewModel<Book>[];
}

const AllBooks: FunctionComponent<AllBooksProps> = ({ data }) => {
	type field = keyof typeof data[number];
	type columnDef<T extends string> = GridColDef & { field: T };

	const test: columnDef<field>[] = [
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
	return (
		<>
			<h1>Books</h1>
			<Box sx={{ height: 300, width: "30%" }}>
				<DataGrid rows={data} columns={test} pageSize={5} rowsPerPageOptions={[5]} />
			</Box>
		</>
	);
};

export default AllBooks;
