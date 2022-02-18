import React from 'react'
import PropTypes from 'prop-types'
import { Button, TextareaAutosize } from '@material-ui/core'
import { BaseInput } from 'components'

const EditProductForm = ({
	name,
	description,
	price,
	setName,
	setDescription,
	setPrice,
	submit,
}) => {
	return (
		<form onSubmit={submit}>
			<BaseInput
				defaultValue={name}
				fullWidth={false}
				label="Product Name"
				onChange={(e) => setName(e.target.value)}
			/>
			<TextareaAutosize
				aria-label="product description"
				defaultValue={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder="Product Description"
				rowsMax={4}
			/>
			<BaseInput
				defaultValue={price}
				fullWidth={false}
				label="Product Price"
				onChange={(e) => setPrice(e.target.value)}
			/>
			<Button
				color="primary"
				fullWidth
				// theme={theme}
				type="submit"
				variant="contained"
			>
				Accept
			</Button>
		</form>
	)
}
EditProductForm.propTypes = {
	description: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	setDescription: PropTypes.func,
	setName: PropTypes.func,
	setPrice: PropTypes.func,
	submit: PropTypes.func,
}
export default EditProductForm
