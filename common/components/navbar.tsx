import { List, ListItemButton } from "@mui/material";
import { Navigation } from "common/models";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarProps {
	navigation: Navigation;
	pathname?: string;
}

export default function Navbar({ navigation, pathname }: NavbarProps) {
	const router = useRouter();
	return (
		<>
			<List component="nav" sx={{ width: "100%", bgcolor: "background.paper" }}>
				{Object.keys(navigation).map((key) => (
					<ListItemButton key={key} selected={router.asPath === navigation[key].path}>
						<Link href={pathname + navigation[key].path}>{navigation[key].title}</Link>
					</ListItemButton>
				))}
			</List>
		</>
	);
}
