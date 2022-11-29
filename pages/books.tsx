import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getAllBooks } from "api/booksApi";
import { NextPage, InferGetServerSidePropsType } from "next";
import React from "react";

export async function getServerSideProps() {
	const data = await getAllBooks();
	return { props: { data } };
}

const BooksPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
	type field = keyof typeof props.data[number];
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
			<Box sx={{ height: 300, width: "100%" }}>
				<DataGrid rows={props.data} columns={test} pageSize={5} rowsPerPageOptions={[5]} />
			</Box>
		</>
	);
};

export default BooksPage;
