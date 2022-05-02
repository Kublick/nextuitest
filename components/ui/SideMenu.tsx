import { Card, Text, useTheme } from '@nextui-org/react';
import {
	EnvelopeClosedIcon,
	LockOpen1Icon,
	PersonIcon,
} from '@radix-ui/react-icons';

import { MenuList } from './MenuList';

export const SideMenu = () => {
	const stuff = [
		{
			id: 1,
			title: 'Authentication',
			menuItems: [
				{ id: 1, icon: <PersonIcon />, label: 'Registro', href: '/auth/login' },
				{ id: 2, icon: <PersonIcon />, label: 'Stuff', href: '/auth/login' },
			],
		},
		{
			id: 2,
			title: 'Security',
			menuItems: [
				{ id: 1, icon: <PersonIcon />, label: 'Registro', href: '/auth/login' },
				{ id: 2, icon: <PersonIcon />, label: 'Stuff', href: '/auth/login' },
			],
		},
	];

	return (
		<Card
			css={{
				minHeight: 'calc(100vh - 16px)',
				width: '250px',
				mt: 8,
				ml: 8,
				backgroundColor: '#bfd8fc',
			}}
		>
			<Text h3 b css={{ textAlign: 'center' }}>
				Menu
			</Text>
			<MenuList />
		</Card>
	);
};
