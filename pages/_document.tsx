import Document, { Html, Head, Main, NextScript } from "next/document";
import { getInitColorSchemeScript } from "@mui/material/styles";
import RootLayout from "components/home/layout";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head></Head>
				<body>
					{getInitColorSchemeScript()}
					<RootLayout>
						<Main />
						<NextScript />
					</RootLayout>
				</body>
			</Html>
		);
	}
}
