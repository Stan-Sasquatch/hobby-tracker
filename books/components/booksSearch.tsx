import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { GoogleVolume, GoogleVolumesResponse } from "books/models";
import { authorSearchGoogleVolumes } from "books/queries";
import React, { FunctionComponent } from "react";

interface BooksSearchProps {
	selectedBookVolume: GoogleVolume | null;
	setSelectedBookVolume: React.Dispatch<React.SetStateAction<GoogleVolume | null>>;
}

const BooksSearch: FunctionComponent<BooksSearchProps> = ({ selectedBookVolume, setSelectedBookVolume }) => {
	const [authorSearch, setAuthorSearch] = React.useState<string>("");
	const [volumeSearchText, setVolumeSearchText] = React.useState<string>("");
	const [resultsData, setResultsData] = React.useState<GoogleVolumesResponse>({ items: [] });
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

	const onSelectedBookChange = (event: SelectChangeEvent) => {
		const item = resultsData.items?.find((x) => x.id === event.target.value);
		if (item) {
			setSelectedBookVolume(item);
		}
	};

	return (
		<Box sx={{ maxWidth: 250 }}>
			<FormControl>
				<TextField
					id="author"
					label="Author"
					disabled={loading}
					value={authorSearch}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAuthorSearch(event.target.value)}
				/>
				<TextField
					id="volume"
					label="Volume"
					disabled={loading}
					value={volumeSearchText}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => setVolumeSearchText(event.target.value)}
				/>
				<Button variant="contained" onClick={handleSubmit} disabled={loading}>
					Submit
				</Button>
			</FormControl>
			{resultsData.items && resultsData.items.length > 0 && (
				<Box sx={{ paddingTop: 5 }}>
					<FormControl fullWidth>
						<InputLabel id="books-label">Books</InputLabel>
						<Select
							id="select-books"
							label-id="books-label"
							label="Books"
							value={selectedBookVolume?.id}
							onChange={onSelectedBookChange}
						>
							{resultsData.items.map((item) => (
								<MenuItem key={item.id} value={item.id}>
									{`${item.volumeInfo?.title} ${item.volumeInfo?.authors?.[0]}`}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<h2>{resultsData.items.length} results found</h2>
				</Box>
			)}
		</Box>
	);
};

export default BooksSearch;
