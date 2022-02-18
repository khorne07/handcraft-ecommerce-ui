import React from 'react'
import PropTypes from 'prop-types'
import { InputAdornment } from '@material-ui/core'
import ShowPasswordIcon from '@material-ui/icons/Visibility'
import HidePasswordIcon from '@material-ui/icons/VisibilityOff'
import { BaseInput } from 'components'

const PasswordField = ({
	changePasswordVisibility,
	classes,
	passwordVisible,
	...props
}) => (
	<BaseInput
		autoComplete="current-password"
		id="password"
		inputProps={{
			endAdornment: (
				<InputAdornment>
					{passwordVisible ? (
						<HidePasswordIcon
							className={classes.eye}
							onClick={changePasswordVisibility}
						/>
					) : (
						<ShowPasswordIcon
							className={classes.eye}
							onClick={changePasswordVisibility}
						/>
					)}
				</InputAdornment>
			),
		}}
		name="password"
		required
		type={passwordVisible ? 'text' : 'password'}
		{...props}
	/>
)
PasswordField.propTypes = {
	changePasswordVisibility: PropTypes.func,
	classes: PropTypes.object,
	passwordVisible: PropTypes.bool,
}
export default PasswordField
