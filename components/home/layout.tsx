import { Grid } from "@mui/material";
import NavBar from "./NavBar";
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Grid container spacing={3} columns={2}>
			<Grid item xs={4}>
				<NavBar />
			</Grid>
			<Grid item xs={8}>
				{children}
			</Grid>
		</Grid>
	);
}
