import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import {
	Drawer,
	Toolbar,
	IconButton,
	Typography,
	Divider,
	withTheme,
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NavLinks from './SideBarNavLinks/NavLinks'

const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		top: theme.mixins.toolbar.minHeight,
		width: theme.extra.sideBarWidth,
	},
}))

const SideBar = ({
	activeRoute,
	handleSelectNavLink,
	hideMenu,
	routes,
	status,
	theme,
}) => {
	const classes = useStyles()
	return (
		<>
			<Drawer
				anchor="left"
				classes={{ paper: classes.drawerPaper }}
				open={status}
				variant="persistent"
			>
				<DrawerToolBar theme={theme}>
					<DrawerTitle color="secondary" theme={theme} variant="h5">
						Menu
					</DrawerTitle>
					<IconButton color="inherit" onClick={hideMenu}>
						<ChevronLeftIcon color="secondary" />
					</IconButton>
				</DrawerToolBar>
				<Divider />
				<NavLinks
					activeRoute={activeRoute}
					click={(route) => handleSelectNavLink(route)}
					routes={routes}
				/>
			</Drawer>
		</>
	)
}
SideBar.propTypes = {
	activeRoute: PropTypes.object,
	handleSelectNavLink: PropTypes.func,
	hideMenu: PropTypes.func,
	history: PropTypes.object,
	routes: PropTypes.array,
	status: PropTypes.bool,
	theme: PropTypes.object,
}
export default withTheme(SideBar)

const DrawerToolBar = styled(Toolbar)`
	padding-left: ${({ theme }) => theme.spacing(2)}px;
	padding-right: 0;
`
const DrawerTitle = styled(Typography)`
	flex-grow: 1;
`
