import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import UserCardActions from './UserCardActions'
import {
	addFavoriteProduct,
	removeFavoriteProduct,
} from 'store/userReducer/actions'

const Container = ({ id, ...props }) => {
	const dispatch = useDispatch()
	const favoriteProducts = useSelector((state) => state.user.favoriteProducts)
	const favorite = !!favoriteProducts.find((prodId) => prodId === id)
	const handleAddFavorite = () => {
		dispatch(addFavoriteProduct(id))
	}
	const handleRemoveFavorite = () => {
		dispatch(removeFavoriteProduct(id))
	}
	return (
		<UserCardActions
			addFavorite={handleAddFavorite}
			favorite={favorite}
			removeFavorite={handleRemoveFavorite}
			{...props}
		/>
	)
}
Container.propTypes = {
	id: PropTypes.number.isRequired,
}
export default Container
