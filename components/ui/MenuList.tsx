import React from 'react';
import { Button, styled, Text } from '@nextui-org/react';
import {
	ChevronUpIcon,
	EnvelopeClosedIcon,
	LockOpen1Icon,
	PersonIcon,
} from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

const ChevronIcon = styled(ChevronUpIcon, {
	width: '12px',
	height: '12px',
	length: 0,
	'[data-state=open] &': { transform: 'rotate(180deg)' },
	'@media (prefers-reduced-motion: no-preference)': {
		transition: 'transform 250ms ease',
	},
});

const ContainerDiv = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	py: '8px',
	gap: '6px',
	length: 0,
});

const LabelMenu = styled(NavigationMenu.Trigger, {
	borderRadius: '4px',
	width: '100%',
	padding: '8px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	length: 0,
	border: 'none',
	'&:hover': {
		cursor: 'pointer',
		opacity: 0.8,
		backgroundColor: 'green',
	},
	'&:focus': {
		bg: 'green',
		opacity: 0.75,
	},
});

const NavigigationMenuList = styled(NavigationMenu.List, {
	py: '4px',
	length: 0,
});

export const MenuList = () => {
	const stuff = [
		{
			id: 1,
			icon: <PersonIcon />,
			title: 'Placeholder',
			menuItems: [
				{ id: 1, label: 'Page 1', href: '/page1' },
				{ id: 2, label: 'Page 2', href: '/page2' },
			],
		},
		{
			id: 2,
			title: 'Security',
			icon: <LockOpen1Icon />,
			menuItems: [
				{ id: 1, label: 'option 1', href: '/section/sectionpage' },
				{ id: 2, label: 'option 2', href: '/section/secondsection' },
			],
		},
	];

	return (
		<>
			<NavigationMenu.Root orientation="vertical">
				{stuff.map(({ id, icon, title, menuItems }) => (
					<NavigigationMenuList key={id}>
						<NavigationMenu.Item>
							<LabelMenu
								onPointerMove={(event) => event.preventDefault()}
								onPointerLeave={(event) => event.preventDefault()}
							>
								{icon} {title} <ChevronIcon />
							</LabelMenu>
							<NavigationMenu.Content
								onPointerMove={(event) => event.preventDefault()}
								onPointerLeave={(event) => event.preventDefault()}
							>
								<ContainerDiv>
									{menuItems.map(({ id, label, href }) => (
										<Link href={href} key={id} passHref>
											<button>{label}</button>
										</Link>
									))}
								</ContainerDiv>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
					</NavigigationMenuList>
				))}
			</NavigationMenu.Root>
		</>
	);
};
