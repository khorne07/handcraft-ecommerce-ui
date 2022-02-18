import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SideBar from './SideBar'

const Container = ({ activeRoute, routes, ...props }) => {
	const history = useHistory()
	const authLevel = useSelector((state) => state.auth.authLevel)
	const navRoutes = routes.filter(({ authLevel: auth }) =>
		authLevel ? auth <= authLevel : auth === 1
	)
	const handleSelectNavLink = (route) => {
		activeRoute
			? activeRoute.route !== route && history.push(route)
			: history.push(route)
	}
	return (
		<SideBar
			activeRoute={activeRoute}
			handleSelectNavLink={handleSelectNavLink}
			routes={navRoutes}
			{...props}
		/>
	)
}
Container.propTypes = {
	activeRoute: PropTypes.object,
	routes: PropTypes.array,
}
export default Container
