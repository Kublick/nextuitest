import React from 'react';
import { Avatar, Button, Popover, styled, Text } from '@nextui-org/react';

const Div = styled('div', {
	display: 'flex',
	alignItems: 'center',
	length: 0,
	gap: '4px',
	paddingRight: '40px',
	'&:hover': {
		cursor: 'pointer',
		opacity: 0.8,
	},
});

export const AvatarComponent = () => {
	return (
		<>
			<Popover>
				<Popover.Trigger>
					<Div>
						<Avatar text="AM" color="secondary" textColor="white" />
						<Text>Alfred Molina</Text>
					</Div>
				</Popover.Trigger>
				<Popover.Content>
					<Button color="warning">Logout</Button>
				</Popover.Content>
			</Popover>
		</>
	);
};
