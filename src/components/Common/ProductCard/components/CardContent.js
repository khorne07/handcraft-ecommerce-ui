import React from 'react'
import PropTypes from 'prop-types'
import { CardContent, Typography } from '@material-ui/core'

const ProductCardContent = ({ description, price }) => (
	<CardContent>
		<Typography color="textSecondary" component="p" variant="body2">
			{description}
		</Typography>
		<Typography variant="h6">{`$${price.toFixed(2)}`}</Typography>
	</CardContent>
)
ProductCardContent.propTypes = {
	description: PropTypes.string,
	price: PropTypes.number,
}
export default ProductCardContent
