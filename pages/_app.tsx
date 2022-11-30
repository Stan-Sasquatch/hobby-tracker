import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import { SWRConfig } from "swr";
import axios from "axios";
import NavLayout from "home/components/layout";
import { rootNavigation } from "common/models";
import { useRouter } from "next/router";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const fetcher = (url: any) => axios.get(url).then((res) => res.data);
type emotionCacheProps = {
	emotionCache?: EmotionCache;
};

export default function MyApp(props: AppProps & emotionCacheProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const { pathname } = useRouter();
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NavLayout navigation={rootNavigation} pathname={""}>
					<SWRConfig value={{ fetcher }}>
						<Component {...pageProps} />
					</SWRConfig>
				</NavLayout>
			</ThemeProvider>
		</CacheProvider>
	);
}
