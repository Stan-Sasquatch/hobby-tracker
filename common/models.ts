export enum HomeNavMenuItems {
	home,
	books,
	bookRatings,
}
type NavProps = { path: string; title: string };
export type Navigation = Record<any, NavProps>;
export const rootNavigation: Navigation = {
	home: { path: "/", title: "Home" },
	books: { path: "/books", title: "Books" },
	bookRatings: { path: "/bookRatings", title: "Book Ratings" },
};
