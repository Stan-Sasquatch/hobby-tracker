import { Button, TextField } from "@mui/material";
import { booksNavigation, GoogleVolume } from "books/models";
import { authorSearchGoogleVolumes } from "books/queries";
import NavLayout from "home/components/layout";
import React from "react";

export default function SearchBooksPage() {
	const [authorSearch, setAuthorSearch] = React.useState<string>("");
	const [volumeSearchText, setVolumeSearchText] = React.useState<string>("");
	const [resultsData, setResultsData] = React.useState<GoogleVolume>({ totalItems: 0 });

	async function handleSubmit() {
		const data = await authorSearchGoogleVolumes(volumeSearchText, authorSearch);

		if (data) {
			setResultsData(data);
			console.log(data);
		}
	}

	return (
		<NavLayout navigation={booksNavigation} pathname={"/books"}>
			<h1>Search Books</h1>
			<form noValidate autoComplete="off">
				<TextField
					id="author"
					label="Author"
					value={authorSearch}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAuthorSearch(event.target.value)}
				/>
				<TextField
					id="volume"
					label="Volume"
					value={volumeSearchText}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => setVolumeSearchText(event.target.value)}
				/>
				<Button variant="contained" onClick={handleSubmit}>
					Submit
				</Button>
			</form>
		</NavLayout>
	);
}
