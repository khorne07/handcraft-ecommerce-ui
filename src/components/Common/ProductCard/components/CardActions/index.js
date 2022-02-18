import React from 'react'
import { useSelector } from 'react-redux'
import CardActions from './CardActions'

const Container = (props) => {
	const isAdmin = useSelector((state) => state.auth.authLevel > 1)
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	return (
		<CardActions
			isAdmin={isAdmin}
			isAuthenticated={isAuthenticated}
			{...props}
		/>
	)
}
export default Container
