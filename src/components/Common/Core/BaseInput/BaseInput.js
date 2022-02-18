import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

const BaseInput = ({ inputProps = {}, error, ...props }) => {
	return (
		<TextField
			InputProps={{ ...inputProps }}
			error={!!error}
			fullWidth
			helperText={error}
			margin="normal"
			variant="outlined"
			{...props}
		/>
	)
}
BaseInput.propTypes = {
	error: PropTypes.string,
	inputProps: PropTypes.object,
}
export default BaseInput
