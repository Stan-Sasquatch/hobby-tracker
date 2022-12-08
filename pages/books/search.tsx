import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { booksNavigation, GoogleVolume } from "books/models";
import { authorSearchGoogleVolumes } from "books/queries";
import NavLayout from "home/components/layout";
import React from "react";

export default function SearchBooksPage() {
	const [authorSearch, setAuthorSearch] = React.useState<string>("");
	const [volumeSearchText, setVolumeSearchText] = React.useState<string>("");
	const [resultsData, setResultsData] = React.useState<GoogleVolume>({ items: [] });
	const [loading, setLoading] = React.useState<boolean>(false);

	async function handleSubmit() {
		setLoading(true);
		const data = await authorSearchGoogleVolumes(volumeSearchText, authorSearch);
		setLoading(false);

		if (data?.items) {
			setResultsData(data);
			console.log(data);
		} else {
			setResultsData({ items: [] });
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
				{resultsData.items && resultsData.items.length > 0 && (
					<List sx={{ width: "100%", bgcolor: "background.paper" }}>
						{resultsData.items.map((item) => (
							<ListItem key={item.id} value={item.volumeInfo.title}>
								<ListItemText primary={item.volumeInfo.title} />
							</ListItem>
						))}
					</List>
				)}
			</form>
		</NavLayout>
	);
}
