import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import AdminActions from './AdminCardActions'
import axios from 'components/App/axios'
import { deleteProduct } from 'store/productsReducer/actions'

const Container = ({ id, ...props }) => {
	const dispatch = useDispatch()
	const [anchorEl, setAnchorEl] = useState(null)
	const handleDelete = (id) => {
		axios
			.delete(`/products/${id}`)
			.then(() => dispatch(deleteProduct(id)))
			.catch((error) => console.log(error))
	}
	const handleEdit = (event) => {
		setAnchorEl(event.currentTarget)
	}
	return (
		<AdminActions
			anchor={anchorEl}
			clickDelete={() => handleDelete(id)}
			clickEdit={handleEdit}
			id={id}
			{...props}
		/>
	)
}
Container.propTypes = {
	id: PropTypes.number,
}
export default Container
