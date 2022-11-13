"use client";
import NavBar from "./NavBar";
import { StylesProvider } from "./stylesProvider";
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<StylesProvider>
					<NavBar />
					{children}
				</StylesProvider>
			</body>
		</html>
	);
}
