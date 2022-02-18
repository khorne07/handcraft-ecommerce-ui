import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import EditProductForm from './EditProductForm'
import axios from 'components/App/axios'
// import { updateProduct } from 'store/productsReducer/actions'

const Container = ({ description, id, name, price }) => {
	// const dispatch = useDispatch()
	const history = useHistory()
	const [pName, setPName] = useState(name)
	const [pDescription, setPDescription] = useState(description)
	const [pPrice, setPPrice] = useState(price)

	const handleSubmit = async () => {
		let reqObject
		// event.preventDefault()
		try {
			reqObject = {
				id,
				productName: pName,
				productDescription: pDescription,
				price: pPrice,
			}
			const response = await axios.put(`products/${id}`, reqObject)
			if (response) {
				history.push('/product-store')
				// dispatch(updateProduct(response.data))
			}
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<EditProductForm
			description={description}
			name={name}
			price={price}
			setDescription={setPDescription}
			setName={setPName}
			setPrice={setPPrice}
			submit={handleSubmit}
		/>
	)
}
Container.propTypes = {
	description: PropTypes.string,
	id: PropTypes.number,
	name: PropTypes.string,
	price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
export default Container
