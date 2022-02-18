import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { routes } from './constants'
import { HOME_URL, LOGIN_URL, SIGN_UP_URL } from 'constants/urls'
import MainLayout from './MainLayout'

const useStyles = makeStyles((theme) => ({
	contentHeader: {
		...theme.mixins.toolbar,
	},
	root: {
		flexGrow: 1,
		maxWidth: '100%',
		margin: theme.spacing(0.5, 0.5),
		marginLeft: `${theme.extra.sideBarWidth + theme.spacing(0.5)}px`,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	sideBarClosed: {
		marginLeft: theme.spacing(0.5),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
}))

const Container = ({ children }) => {
	const classes = useStyles()
	const { pathname, hash } = useLocation()
	const history = useHistory()
	const authLevel = useSelector((state) => state.auth.authLevel)
	const [sideBarOpened, setSideBarOpened] = useState(true)
	const [contentClasses, setContentClasses] = useState([classes.root])
	const [activeRoute, setActiveRoute] = useState({})
	const [openLogin, setOpenLogin] = useState(false)
	const [openSignUp, setOpenSignUp] = useState(false)

	useEffect(() => {
		const currentRoute = routes.find((route) => route.route.match(pathname))
		if (currentRoute.authLevel > 1 && !authLevel) history.replace(HOME_URL)
		else if (authLevel && currentRoute.authLevel > authLevel) history.goBack()
		setActiveRoute(currentRoute)
		if (hash) {
			hash.match(LOGIN_URL) && setOpenLogin(true)
			hash.match(SIGN_UP_URL) && setOpenSignUp(true)
		}
	}, [pathname])

	const handleCloseSideBar = () => {
		setContentClasses([classes.root, classes.sideBarClosed])
		setSideBarOpened(false)
	}
	const handleChangeSideBarState = () => {
		sideBarOpened
			? setContentClasses([classes.root, classes.sideBarClosed])
			: setContentClasses([classes.root])
		setSideBarOpened(!sideBarOpened)
	}
	const handleCloseRightDrawer = () => {
		setOpenLogin(false)
		setOpenSignUp(false)
	}
	return (
		<MainLayout
			activeRoute={activeRoute}
			clickAppBarMenuButton={(buttonClicked) =>
				handleChangeSideBarState(buttonClicked)
			}
			clickLogin={() => setOpenLogin(!openLogin)}
			clickSignUp={() => setOpenSignUp(!openSignUp)}
			closeRightDrawer={handleCloseRightDrawer}
			closeSideBar={handleCloseSideBar}
			contentClasses={contentClasses}
			contentHeader={classes.contentHeader}
			openLogin={openLogin}
			openSignUp={openSignUp}
			routes={routes}
			sideBarOpened={sideBarOpened}
		>
			{children}
		</MainLayout>
	)
}
Container.propTypes = {
	children: PropTypes.node.isRequired,
}
export default Container
