import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Cookies from 'js-cookie';

import { darkTheme, customTheme, lightTheme } from '@/themes';

import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface Props extends AppProps {
	theme: string;
}

function App({ Component, pageProps }: Props) {
	const [currentTheme, setCurrentTheme] = useState(lightTheme);

	useEffect(() => {
		const cookieTheme = Cookies.get('theme') || 'light';
		const selectedTheme =
			cookieTheme === 'light'
				? lightTheme
				: cookieTheme === 'dark'
				? darkTheme
				: customTheme;
		setCurrentTheme(selectedTheme);
	}, []);

	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;
