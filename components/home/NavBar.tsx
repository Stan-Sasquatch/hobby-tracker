import { List, ListItemButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import { HomeNavMenuItems, paths } from "./models";
import { useRouter } from "next/router";

function NavBar() {
	const router = useRouter();
	return (
		<>
			<List component="nav" sx={{ width: "10%", bgcolor: "background.paper" }}>
				<ListItemButton selected={router.pathname === paths.home}>
					<Link href={paths.home}>{HomeNavMenuItems[HomeNavMenuItems.home]}</Link>
				</ListItemButton>
				<ListItemButton selected={router?.pathname === paths.books}>
					<Link href={paths.books}>{HomeNavMenuItems[HomeNavMenuItems.books]}</Link>
				</ListItemButton>
				<ListItemButton selected={router?.pathname === paths.bookRatings}>
					<Link href={paths.bookRatings}>{HomeNavMenuItems[HomeNavMenuItems.bookRatings]}</Link>
				</ListItemButton>
			</List>
		</>
	);
}

export default NavBar;
