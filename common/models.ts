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

export const googleVolumeQueryTypes = { author: "inauthor", title: "intitle" };
export type volumeQueryTypes = "inauthor" | "intitle";
export enum SWRState {
	error,
	loading,
	loaded,
}

export type SWRResponse<T> = { data: T | null; state: SWRState };
