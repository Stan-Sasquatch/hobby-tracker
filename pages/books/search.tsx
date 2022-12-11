import BooksSearch from "books/components/booksSearch";
import { booksNavigation, GoogleVolume } from "books/models";
import NavLayout from "home/components/layout";
import React from "react";

export default function SearchBooksPage() {
	const [volume, setVolume] = React.useState<GoogleVolume | null>(null);
	const subtitle = volume?.volumeInfo?.subtitle;
	return (
		<NavLayout navigation={booksNavigation} pathname={"/books"}>
			<BooksSearch selectedBookVolume={volume} setSelectedBookVolume={setVolume} />
			{subtitle && (
				<>
					<p>{subtitle}</p>
				</>
			)}
		</NavLayout>
	);
}
