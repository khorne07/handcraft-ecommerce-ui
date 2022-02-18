import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AppBar from './AppBar'
import {
	dropAuthCredentials,
	setAuthCredentials,
} from 'store/authReducer/actions'

const Container = ({ ...props }) => {
	const dispatch = useDispatch()
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	const userName = useSelector((state) => state.auth.userName)

	useEffect(() => {
		const userCredentials = localStorage.getItem('Auth_Credentials')
		userCredentials && dispatch(setAuthCredentials(JSON.parse(userCredentials)))
	}, [])

	const handleLogout = () => {
		dispatch(dropAuthCredentials())
	}
	return (
		<AppBar
			clickLogout={handleLogout}
			isAuthenticated={isAuthenticated}
			userName={userName}
			{...props}
		/>
	)
}
export default Container
