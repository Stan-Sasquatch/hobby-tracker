import { List, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HomeNavMenuItems, paths } from "./models";

const NavBar = () => {
	const pathname = usePathname();
	return (
		<List component="nav">
			<Link href={paths.home}>
				<ListItemButton selected={pathname === paths.home}>
					<ListItemText primary={HomeNavMenuItems[HomeNavMenuItems.home]} />
				</ListItemButton>
			</Link>
			<Link href={paths.books}>
				<ListItemButton selected={pathname === paths.books}>
					<ListItemText primary={HomeNavMenuItems[HomeNavMenuItems.books]} />
				</ListItemButton>
			</Link>
			<ListItemButton selected={pathname === paths.bookRatings}>
				<ListItemText primary={HomeNavMenuItems[HomeNavMenuItems.bookRatings]} />
			</ListItemButton>
		</List>
	);
};

export default NavBar;
