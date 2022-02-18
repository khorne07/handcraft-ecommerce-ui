import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MoneyInput from './MoneyInput'
import { formatOnChange, formatOnBlur } from './formatHelper'

const Container = ({ maxDigits = 6, defaultValue, ...props }) => {
	const [value, setValue] = useState(defaultValue ? String(defaultValue) : '')
	const [focused, setFocused] = useState(false)
	const handleOnChange = (e) => {
		setValue(formatOnChange(e.target.value, value, maxDigits))
	}
	const handleOnBlur = () => {
		setValue(formatOnBlur(value))
		setFocused(false)
	}
	return (
		<MoneyInput
			focused={focused}
			onBlur={handleOnBlur}
			onChange={(e) => handleOnChange(e)}
			onFocus={() => setFocused(true)}
			value={value}
			{...props}
		/>
	)
}
Container.propTypes = {
	defaultValue: PropTypes.string,
	maxDigits: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}
export default Container
