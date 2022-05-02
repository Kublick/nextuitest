import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { keyframes, styled, Text } from '@nextui-org/react';
import {
	ChevronUpIcon,
	EnvelopeClosedIcon,
	LockOpen1Icon,
	PersonIcon,
} from '@radix-ui/react-icons';

const LabelMenu = styled(DropdownMenu.Trigger, {
	unset: 'all',
	backgroundColor: 'transparent',
	borderRadius: '4px',
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
		bg: 'pink',
	},
});

const ChevronIcon = styled(ChevronUpIcon, {
	unset: 'all',
	width: '24px',
	height: '24px',
	length: 0,
	'[data-state=open] &': { transform: 'rotate(180deg)' },
	'@media (prefers-reduced-motion: no-preference)': {
		transition: 'transform 250ms ease',
	},
});

const MenuItem = styled(DropdownMenu.Item, {
	unset: 'all',
	backgroundColor: 'transparent',
	borderRadius: '4px',
	padding: '8px',
	display: 'flex',
	alignItems: 'center',
	length: 0,
	gap: '4px',

	'&:hover': {
		cursor: 'pointer',
		opacity: 0.8,
		backgroundColor: 'green',
	},
});

const slideDown = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-10px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideUp = keyframes({
	'0%': { opacity: 0, transform: 'translateY(10px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const DropDownContent = styled(DropdownMenu.Content, {
	unset: 'all',
	backgroundColor: 'transparent',
	borderRadius: '4px',
	padding: '8px',
	display: 'flex',
	flexDirection: 'column',
	length: 0,
	width: '200px',
	animationDuration: '0.6s',
	animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
	animationFillMode: 'forwards',
	'&[data-side="top"]': { animationName: slideUp },
	'&[data-side="bottom"]': { animationName: slideDown },
});

export const MenuList = () => {
	const data = [
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
		<>
			{data.map(({ id, title, menuItems }) => (
				<DropdownMenu.Root key={id}>
					<LabelMenu>
						{title} <ChevronIcon />
					</LabelMenu>
					<DropDownContent portalled={false}>
						<DropdownMenu.Group>
							{menuItems.map((menuItem) => (
								<MenuItem key={menuItem.id}>
									{menuItem.icon} {menuItem.label}
								</MenuItem>
							))}
						</DropdownMenu.Group>
					</DropDownContent>
				</DropdownMenu.Root>
			))}
		</>
	);
};
