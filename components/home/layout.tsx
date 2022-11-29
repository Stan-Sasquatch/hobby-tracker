import { Grid } from "@mui/material";
import NavBar from "./NavBar";
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Grid container spacing={3} columns={9}>
			<Grid item xs={3}>
				<NavBar />
			</Grid>
			<Grid item xs={6}>
				{children}
			</Grid>
		</Grid>
	);
}
