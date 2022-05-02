import { Button, Card, Container, Input, Row, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '../../components/layout/AuthLayout';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
	email: yup
		.string()
		.email('email invalido')
		.required('Este campo es requerido')
		.matches(
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
			'email invalido',
		),
	password: yup
		.string()
		.required('Este campo es requerido')
		.min(6, 'Minimo 6 caracteres'),
});
type FormData = {
	loginName: string;
	password: string;
};

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			loginName: '',
			password: '',
		},
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	const [disabled, setDisabled] = useState(false);

	const onSubmit = async (data: FormData) => {
		setDisabled(true);
		console.log(data);
		setTimeout(() => {
			setDisabled(false);
		}, 2000);
	};
	return (
		<AuthLayout title="Laboratorio Blancarte">
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<Card
					bordered
					css={{
						maxWidth: '480px',
						minWidth: '320px',
						p: 20,
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Text h3 weight="bold" css={{ textAlign: 'center' }}>
						Login
					</Text>
					<Input
						bordered
						css={{ my: 5 }}
						label="Usuario"
						{...register('loginName')}
						helperText={errors?.loginName?.message}
						helperColor="error"
						status={errors?.loginName ? 'error' : 'primary'}
					/>
					<Input.Password
						bordered
						css={{ my: 10 }}
						label="Password"
						{...register('password')}
						helperText={errors?.password?.message}
						helperColor="error"
						status={errors?.password ? 'error' : 'primary'}
					/>
					<Button
						type="submit"
						color="primary"
						css={{ mt: 20 }}
						disabled={disabled}
					>
						Registrar
					</Button>
				</Card>
			</form>
		</AuthLayout>
	);
};

export default Login;
