import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	drawerContainer: {
		overflow: 'auto',
	},
	menuOptions: {
		textAlign: 'center',
	},
	navLink: {
		borderRadius: theme.spacing(1),
		'&:hover': {
			backgroundColor: 'rgba(0, 96, 100, 0.4)',
			color: theme.palette.secondary.light,
		},
	},
	activeNavLink: {
		backgroundColor: 'rgba(0, 96, 100, 0.3)',
		color: theme.palette.secondary.main,
	},
	linkText: {
		fontSize: '1.15rem',
	},
}))
const NavLinks = ({ routes, click, activeRoute }) => {
	const classes = useStyles()
	const activeLinkStyle = [classes.navLink, classes.activeNavLink].join(' ')
	return (
		<div className={classes.drawerContainer}>
			<List>
				{routes.map((route) => (
					<ListItem
						button
						className={
							route === activeRoute ? activeLinkStyle : classes.navLink
						}
						key={route.name}
						onClick={() => click(route.route)}
					>
						<ListItemText
							className={classes.menuOptions}
							classes={{ primary: classes.linkText }}
						>
							{route.name}
						</ListItemText>
					</ListItem>
				))}
			</List>
		</div>
	)
}
NavLinks.propTypes = {
	activeRoute: PropTypes.object,
	click: PropTypes.func,
	routes: PropTypes.array,
}
export default NavLinks
