import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card } from '@material-ui/core'
import ProductCardHeader from './components/CardHeader'
import ProductCardMedia from './components/CardMedia'
import ProductCardContent from './components/CardContent'
import ProductCardActions from './components/CardActions'

const ProductCard = ({ description, id, imageUrl, name, price }) => (
	<CustomCard>
		<ProductCardHeader title={name} />
		<ProductCardMedia imageUrl={imageUrl} name={name} />
		<ProductCardContent description={description} price={price} />
		<ProductCardActions
			description={description}
			id={id}
			name={name}
			price={price}
		/>
	</CustomCard>
)
ProductCard.propTypes = {
	description: PropTypes.string,
	id: PropTypes.number,
	imageUrl: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
}
export default ProductCard

const CustomCard = styled(Card)`
	max-width: 345px;
	background-color: #2f343c;
`
