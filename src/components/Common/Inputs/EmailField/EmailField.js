import React from 'react'
import { BaseInput } from 'components'

const EmailField = (props) => {
	return (
		<BaseInput
			autoComplete="email"
			id="email"
			name="email"
			required
			type="email"
			{...props}
		/>
	)
}
export default EmailField
