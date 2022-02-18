import React from 'react'
import PropTypes from 'prop-types'
import { InputAdornment } from '@material-ui/core'
import { BaseInput } from 'components'

const MoneyInput = ({
	focused,
	onBlur,
	onChange,
	onFocus,
	value,
	...props
}) => (
	<BaseInput
		InputProps={
			focused || value? {
				startAdornment: <InputAdornment position="start">$</InputAdornment>,
			}: null
		}
		onBlur={onBlur}
		onChange={(e) => onChange(e)}
		onFocus={onFocus}
		onPaste={(e) => e.preventDefault()}
		placeholder={focused ? '0.00' : null}
		value={value}
		{...props}
	/>
)

MoneyInput.propTypes = {
	focused: PropTypes.bool,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	value: PropTypes.any,
}

export default MoneyInput
