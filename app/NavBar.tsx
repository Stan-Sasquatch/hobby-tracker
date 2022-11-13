"use client";
import Link from "next/link";
import React from "react";
import { Menu } from "semantic-ui-react";
import { HomeNavMenuItems } from "./models";

const NavBar = () => {
	const [activeItem, setActiveItem] = React.useState<HomeNavMenuItems>(HomeNavMenuItems.home);
	return (
		<Menu fluid vertical>
			<Link href="/">
				<Menu.Item
					name={HomeNavMenuItems[HomeNavMenuItems.home]}
					active={activeItem === HomeNavMenuItems.home}
					onClick={() => setActiveItem(HomeNavMenuItems.home)}
				/>
			</Link>
			<Link href="/books">
				<Menu.Item
					name={HomeNavMenuItems[HomeNavMenuItems.books]}
					active={activeItem === HomeNavMenuItems.books}
					onClick={() => setActiveItem(HomeNavMenuItems.books)}
				/>
			</Link>
			<Link href="/bookRatings">
				<Menu.Item
					name={HomeNavMenuItems[HomeNavMenuItems.bookRatings]}
					active={activeItem === HomeNavMenuItems.bookRatings}
					onClick={() => setActiveItem(HomeNavMenuItems.bookRatings)}
				/>
			</Link>
		</Menu>
	);
};

export default NavBar;
