import { styled, Avatar, Text, Row, Divider } from '@nextui-org/react';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';
import { SideMenu } from '../ui/SideMenu';
import { AvatarComponent } from '../ui/Avatar';

type Props = {
	children: React.ReactNode;
	title: string;
};

const Div = styled('div', {
	margin: '12px 12px',
	length: 0,
});

const DivContainer = styled('div', {
	display: 'flex',
	length: 0,
});

const DivAvatar = styled('div', {
	width: '100%',
	display: 'flex',
	margin: '8px 8px',
	paddingRight: '12px',
	justifyContent: 'space-between',
	alignItems: 'center',
	length: 0,
});

const Content = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	length: 0,
});

const DivTitle = styled('div', {
	display: 'flex',
	alignItems: 'center',
	length: 0,
	gap: '4px',
});

export const UserLayout: NextPage<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<DivContainer>
				<div>
					<SideMenu />
				</div>
				<Content>
					<DivAvatar>
						<Text h3>Some Header Text</Text>
						<DivTitle>
							<AvatarComponent />
							{/* <Avatar text="Nombre" color="secondary" textColor="white" /> */}
						</DivTitle>
					</DivAvatar>
					<Divider />
					<Div>{children}</Div>
				</Content>
			</DivContainer>
		</>
	);
};
