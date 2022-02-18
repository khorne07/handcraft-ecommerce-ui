import React from 'react'
import PropTypes from 'prop-types'
import { CardActionArea, CardMedia } from '@material-ui/core'
import image from 'assets/img/079.jpg'

const ProductCardMedia = ({ name }) => (
	<CardActionArea>
		<CardMedia
			alt={name}
			component="img"
			height="200"
			image={image} //TODO: Use imageUrl prop instead
			title={name}
		/>
	</CardActionArea>
)
ProductCardMedia.propTypes = {
	imageUrl: PropTypes.string,
	name: PropTypes.string,
}
export default ProductCardMedia
