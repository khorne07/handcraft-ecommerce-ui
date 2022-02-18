import React from 'react'
import { useSelector } from 'react-redux'
import ExpansionPanel from './ExpansionPanel'

const Container = ({ id, ...props }) => {
	const category = useSelector((state) =>
		state.products.categories.filter((category) => category.id === id)
	)
	const authLevel = useSelector((state) => state.auth.authLevel)
	const handleAddProduct = () => {}
	console.log(category)
	return (
		<ExpansionPanel
			id={id}
			authLevel={authLevel}
			clickAdd={handleAddProduct}
			{...props}
		/>
	)
}

export default Container
