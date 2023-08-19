import { ChangeEvent, useState, useEffect } from 'react';
import { NextPage, GetServerSideProps } from 'next';

import {
	Button,
	Card,
	CardContent,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@mui/material';
import Cookies from 'js-cookie';

import { Layout } from '@/components';

interface Props {
	theme: string;
	name: string;
}

const ThemeChanger: NextPage<Props> = ({ theme, name }) => {
	const [currentTheme, setCurrentTheme] = useState(theme);

	const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedTheme = event.target.value;
		setCurrentTheme(selectedTheme);

		Cookies.set('theme', selectedTheme);
	};

	useEffect(() => {
		console.log('Cookies:', Cookies.get('theme'));
	}, []);

	return (
		<Layout>
			<Card>
				<CardContent>
					<FormControl>
						<FormLabel>Theme</FormLabel>
						<RadioGroup
							value={currentTheme}
							onChange={onThemeChange}
						>
							<FormControlLabel
								value='light'
								control={<Radio />}
								label='Light'
							/>
							<FormControlLabel
								value='dark'
								control={<Radio />}
								label='Dark'
							/>
							<FormControlLabel
								value='custom'
								control={<Radio />}
								label='Custom'
							/>
						</RadioGroup>
					</FormControl>
					<Button>Request</Button>
				</CardContent>
			</Card>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { theme = 'light', name = 'No name' } = req.cookies;

	const validThemes = ['light', 'dark', 'custom'];

	return {
		props: {
			theme: validThemes.includes(theme) ? theme : 'ligth',
			name,
		},
	};
};

export default ThemeChanger;
