import Nextlink from 'next/link';

import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

export const Navbar = () => {
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<IconButton
					size='large'
					edge='start'
				>
					<MenuOutlined />
				</IconButton>

				<Link
					component={Nextlink}
					href='/'
					passHref
					underline='none'
					color='white'
				>
					<Typography variant='h6'>CookieApp</Typography>
				</Link>

				<div style={{ flex: 1 }} />

				<Link
					component={Nextlink}
					href='/theme-changer'
					passHref
					underline='none'
					color='white'
				>
					<Typography variant='h6'>Change Theme</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
};
