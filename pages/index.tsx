import { Button } from '@nextui-org/react';
import type { NextPage } from 'next';
import { UserLayout } from '../components/layout/UserLayout';
import Login from './auth/login';

const Home: NextPage = () => {
	return <Login />;
};

export default Home;
