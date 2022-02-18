import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PasswordField from './PasswordField'

const useStyles = makeStyles(() => ({
	eye: {
		cursor: 'pointer',
	},
}))

const Container = (props) => {
	const classes = useStyles()
	const [passwordVisible, setPasswordVisible] = useState(false)
	const handlePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible)
		//TODO: Set focus focus into the input after click
	}
	return (
		<PasswordField
			changePasswordVisibility={handlePasswordVisibility}
			classes={classes}
			passwordVisible={passwordVisible}
			{...props}
		/>
	)
}
export default Container
