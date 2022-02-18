import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, useLocation } from 'react-router'
import RightDrawer from './RightDrawer'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { LOGIN_URL, SIGN_UP_URL } from 'constants/urls'

const Container = ({ closeRightDrawer, openLogin, openSignUp }) => {
	const [childComponent, setChildComponent] = useState()
	const [open, setOpen] = useState(false)
	const history = useHistory()
	const { pathname } = useLocation()
	useEffect(() => {
		if (openLogin) {
			history.replace(LOGIN_URL)
			setChildComponent(<LoginForm handleClose={handleClose} />)
		}
		if (openSignUp) {
			history.replace(SIGN_UP_URL)
			setChildComponent(<SignUpForm handleClose={handleClose} />)
		}
		setOpen(openLogin || openSignUp)
	}, [openLogin, openSignUp])
	const handleClose = () => {
		history.replace(pathname)
		setOpen(false)
		closeRightDrawer()
	}
	return (
		<RightDrawer handleClose={handleClose} open={open}>
			{childComponent}
		</RightDrawer>
	)
}
Container.propTypes = {
	closeRightDrawer: PropTypes.func,
	openLogin: PropTypes.bool,
	openSignUp: PropTypes.bool,
}
export default Container
