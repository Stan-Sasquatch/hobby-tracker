import { Grid } from "@mui/material";
import Navbar from "common/components/navbar";
import { Navigation } from "common/models";

interface NavLayoutProps {
	navigation: Navigation;
	pathname?: string;
	children: React.ReactNode;
}
export default function NavLayout({ navigation, pathname, children }: NavLayoutProps) {
	return (
		<Grid container spacing={2} columns={16}>
			<Grid item xs={2}>
				<Navbar navigation={navigation} pathname={pathname} />
			</Grid>
			<Grid item xs={14}>
				{children}
			</Grid>
		</Grid>
	);
}
