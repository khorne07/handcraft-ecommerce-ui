import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline } from '@material-ui/core'
import { GridItem, GridContainer } from 'components'
import AppBar from './components/AppBar'
import RightDrawer from './components/RightDrawer'
import SideBar from './components/SideBar'

const MainLayout = ({
	activeRoute,
	children,
	clickAppBarMenuButton,
	clickLogin,
	clickSignUp,
	closeRightDrawer,
	closeSideBar,
	contentClasses,
	contentHeader,
	openLogin,
	openSignUp,
	routes,
	sideBarOpened,
}) => (
	<GridContainer>
		<CssBaseline />
		<AppBar
			clickLogin={clickLogin}
			clickMenuBtn={clickAppBarMenuButton}
			clickSignUp={clickSignUp}
			currentRouteName={activeRoute ? activeRoute.name : routes[0].name}
		/>
		<SideBar
			activeRoute={activeRoute}
			hideMenu={closeSideBar}
			routes={routes}
			status={sideBarOpened}
		/>
		<GridContainer className={contentClasses.join(' ')} component="main">
			<GridItem className={contentHeader} xs={12} />
			<GridItem xs={12}>{children}</GridItem>
		</GridContainer>
		<RightDrawer
			closeRightDrawer={closeRightDrawer}
			openLogin={openLogin}
			openSignUp={openSignUp}
		/>
	</GridContainer>
)
MainLayout.propTypes = {
	activeRoute: PropTypes.object,
	children: PropTypes.node,
	clickAppBarMenuButton: PropTypes.func,
	clickLogin: PropTypes.func,
	clickSignUp: PropTypes.func,
	closeRightDrawer: PropTypes.func,
	closeSideBar: PropTypes.func,
	contentClasses: PropTypes.array,
	contentHeader: PropTypes.string,
	openLogin: PropTypes.bool,
	openSignUp: PropTypes.bool,
	routes: PropTypes.array,
	sideBarOpened: PropTypes.bool,
}
export default MainLayout
