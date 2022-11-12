export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<h1>test title</h1>
				{children}
			</body>
		</html>
	);
}
