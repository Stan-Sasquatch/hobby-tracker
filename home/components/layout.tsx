import { Grid } from "@mui/material";
import Navbar from "common/components/navbar";
import { rootNavigation } from "common/models";
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Grid container spacing={3} columns={9}>
			<Grid item xs={3}>
				<Navbar navigation={rootNavigation} />
			</Grid>
			<Grid item xs={6}>
				{children}
			</Grid>
		</Grid>
	);
}
