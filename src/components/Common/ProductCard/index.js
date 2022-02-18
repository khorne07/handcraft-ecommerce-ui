import React from 'react'
import PropTypes from 'prop-types'
import { GridItem, GridContainer } from 'components'
import ProductCard from './ProductCard'

const Container = ({ products }) => {
	const cardList =
		products &&
		products.map((product) => (
			<GridItem key={product.id} lg={4} md={6} sm={12} xl={3}>
				<GridContainer justify="center">
					<ProductCard
						description={product.productDescription}
						id={product.id}
						name={product.productName}
						price={product.price}
						// imageUrl={product.imageUrl}
					/>
				</GridContainer>
			</GridItem>
		))
	return (
		<GridContainer justify="center" spacing={2}>
			{cardList}
		</GridContainer>
	)
}
Container.propTypes = {
	products: PropTypes.array.isRequired,
}
export default Container
