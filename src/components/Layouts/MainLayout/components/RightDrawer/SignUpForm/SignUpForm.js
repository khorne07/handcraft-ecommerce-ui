import React from 'react'
import PropTypes from 'prop-types'
import {
	Avatar,
	Button,
	Container,
	Link,
	Typography,
	withTheme,
} from '@material-ui/core'
import styled from 'styled-components'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { BaseInput, PasswordField, EmailField, GridContainer } from 'components'

const SignUpForm = ({
	handleSubmit,
	setEmail,
	setPassword,
	setUserName,
	theme,
}) => (
	<Container maxWidth="sm">
		<SignUpContainer theme={theme}>
			<SignUpAvatar theme={theme}>
				<LockOutlinedIcon />
			</SignUpAvatar>
			<Typography component="h1" variant="h5">
				Sign Up
			</Typography>
			<Form onSubmit={handleSubmit} theme={theme}>
				<BaseInput
					autoFocus
					label="UserName"
					onChange={(e) => setUserName(e.target.value)}
				/>
				<EmailField
					label="Email Address"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<PasswordField
					label="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<SubmitButton
					color="primary"
					fullWidth
					theme={theme}
					type="submit"
					variant="contained"
				>
					Sign Up
				</SubmitButton>
				<GridContainer justify="center">
					<Typography component="span" variant="body2">
						{'Back to '}
						<Link href="#" variant="body2">
							Login
						</Link>
					</Typography>
				</GridContainer>
			</Form>
		</SignUpContainer>
	</Container>
)
SignUpForm.propTypes = {
	handleSubmit: PropTypes.func,
	setEmail: PropTypes.func,
	setPassword: PropTypes.func,
	setUserName: PropTypes.func,
	theme: PropTypes.object,
}
export default withTheme(SignUpForm)

const SignUpContainer = styled.div`
	margin-top: ${({ theme }) => theme.spacing(8)}px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Form = styled.form`
	width: 100%;
	margin-top: ${({ theme }) => theme.spacing(1)}px;
`
const SignUpAvatar = styled(Avatar)`
	margin: ${({ theme }) => theme.spacing(1)}px;
	background-color: ${({ theme }) => theme.palette.secondary.main};
`
const SubmitButton = styled(Button)`
	margin: ${({ theme }) => theme.spacing(1, 0, 2)};
`
