import { booksNavigation } from "books/models";
import NavLayout from "home/components/layout";
import { useRouter } from "next/router";

export default function SearchBooksPage() {
	const { pathname } = useRouter();
	return (
		<NavLayout navigation={booksNavigation} pathname={"/books"}>
			<h1>Search Books</h1>
		</NavLayout>
	);
}
