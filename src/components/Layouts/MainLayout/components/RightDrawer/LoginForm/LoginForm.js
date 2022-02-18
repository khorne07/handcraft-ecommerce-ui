import React from 'react'
import PropTypes from 'prop-types'
import {
	Avatar,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Link,
	Typography,
	withTheme,
} from '@material-ui/core'
import styled from 'styled-components'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { PasswordField, BaseInput, GridContainer } from 'components'

const LoginForm = ({
	changeExtended,
	extended,
	setPassword,
	setUserNameOrEmail,
	submit,
	theme,
}) => (
	<Container maxWidth="sm">
		<LoginContainer theme={theme}>
			<LoginAvatar theme={theme}>
				<LockOutlinedIcon />
			</LoginAvatar>
			<Typography component="h1" variant="h5">
				Login
			</Typography>
			<Form onSubmit={submit} theme={theme}>
				<BaseInput
					autoFocus
					label="Username or Email Address"
					name="Username or Email Address"
					onChange={(e) => setUserNameOrEmail(e.target.value)}
				/>
				<PasswordField
					label="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<GridContainer alignItems="center" justify="space-between">
					<FormControlLabel
						control={<Checkbox color="secondary" value={extended} />}
						label="Remember me"
						onChange={changeExtended}
					/>
					<Link href="#" variant="body2">
						Forgot password?
					</Link>
				</GridContainer>
				<SubmitButton
					color="primary"
					fullWidth
					theme={theme}
					type="submit"
					variant="contained"
				>
					Sign In
				</SubmitButton>
				<GridContainer justify="center">
					<Typography component="span" variant="body2">
						{"Don't have an account? "}
						<Link href="#" variant="body2">
							Register Now
						</Link>
					</Typography>
				</GridContainer>
			</Form>
		</LoginContainer>
	</Container>
)
LoginForm.propTypes = {
	changeExtended: PropTypes.func,
	extended: PropTypes.bool,
	setPassword: PropTypes.func,
	setUserNameOrEmail: PropTypes.func,
	submit: PropTypes.func,
	theme: PropTypes.object,
}
export default withTheme(LoginForm)

const LoginContainer = styled.div`
	margin-top: ${({ theme }) => theme.spacing(8)}px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Form = styled.form`
	width: 100%;
	margin-top: ${({ theme }) => theme.spacing(1)}px;
`
const LoginAvatar = styled(Avatar)`
	margin: ${({ theme }) => theme.spacing(1)}px;
	background-color: ${({ theme }) => theme.palette.secondary.main};
`
const SubmitButton = styled(Button)`
	margin: ${({ theme }) => theme.spacing(1, 0, 2)};
`
