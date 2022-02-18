import React from 'react'
import PropTypes from 'prop-types'
import { CardHeader } from '@material-ui/core'

const ProductCardHeader = ({ title }) => {
	return (
		<CardHeader
			title={title}
			// subheader=
		/>
	)
}
ProductCardHeader.propTypes = {
	title: PropTypes.string,
}
export default ProductCardHeader
