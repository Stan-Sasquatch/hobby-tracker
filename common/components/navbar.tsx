import { List, ListItemButton } from "@mui/material";
import { Navigation } from "common/models";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarProps {
	navigation: Navigation;
}

export default function Navbar({ navigation }: NavbarProps) {
	const router = useRouter();
	return (
		<>
			<List component="nav" sx={{ width: "20%", bgcolor: "background.paper" }}>
				{Object.keys(navigation).map((key) => (
					<ListItemButton key={key} selected={router.pathname === navigation[key].path}>
						<Link href={navigation[key].path}>{navigation[key].title}</Link>
					</ListItemButton>
				))}
			</List>
		</>
	);
}
