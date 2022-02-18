import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
	withTheme,
} from '@material-ui/core'
import { Tooltip } from 'components'
import MenuIcon from '@material-ui/icons/Menu'
import LogoutIcon from '@material-ui/icons/PowerSettingsNew'

const ButtonAppBar = ({
	clickLogin,
	clickLogout,
	clickSignUp,
	clickMenuBtn,
	currentRouteName,
	isAuthenticated,
	userName,
	theme,
}) => (
	<Wrapper theme={theme}>
		<AppBar position="static">
			<Toolbar>
				<StyledIconButton
					aria-label="Menu"
					color="inherit"
					edge="start"
					onClick={clickMenuBtn}
					theme={theme}
				>
					<MenuIcon color="secondary" />
				</StyledIconButton>
				<Title variant="h5">{currentRouteName}</Title>
				{isAuthenticated ? (
					<Box alignItems="center" display="flex">
						<Typography variant="body2">{'Welcome back'}</Typography>
						<Box mx={1}>
							<Typography color="secondary" variant="body1">
								{userName}
							</Typography>
						</Box>
						<Tooltip color="secondary" title="Logout">
							<IconButton
								aria-label="Logout"
								color="inherit"
								edge="end"
								onClick={clickLogout}
								theme={theme}
							>
								<StyledLogoutIcon theme={theme} />
							</IconButton>
						</Tooltip>
					</Box>
				) : (
					<Box>
						<Button color="secondary" onClick={() => clickLogin()}>
							Login
						</Button>
						<Button color="secondary" onClick={() => clickSignUp()}>
							SignUp
						</Button>
					</Box>
				)}
			</Toolbar>
		</AppBar>
	</Wrapper>
)
ButtonAppBar.propTypes = {
	clickLogin: PropTypes.func,
	clickLogout: PropTypes.func,
	clickMenuBtn: PropTypes.func,
	clickSignUp: PropTypes.func,
	currentRouteName: PropTypes.string,
	isAuthenticated: PropTypes.bool,
	theme: PropTypes.shape(),
	userName: PropTypes.string,
}
export default withTheme(ButtonAppBar)

const Wrapper = styled.div`
	flex-grow: 1;
	z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`
const StyledIconButton = styled(IconButton)`
	margin-right: ${({ theme }) => theme.spacing(2)};
`
const Title = styled(Typography)`
	flex-grow: 1;
`
const StyledLogoutIcon = styled(LogoutIcon)`
	color: ${({ theme }) => theme.palette.warning.main};
`
