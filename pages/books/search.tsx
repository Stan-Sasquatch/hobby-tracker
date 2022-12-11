import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import BooksSearch from "books/components/booksSearch";
import { booksNavigation, GoogleVolumesResponse } from "books/models";
import { authorSearchGoogleVolumes } from "books/queries";
import NavLayout from "home/components/layout";
import React from "react";

export default function SearchBooksPage() {
	return (
		<NavLayout navigation={booksNavigation} pathname={"/books"}>
			<h1>Search Books</h1>
			<form noValidate autoComplete="off">
				<BooksSearch />
			</form>
		</NavLayout>
	);
}
