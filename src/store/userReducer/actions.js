import * as actionType from './actionTypes'

export const addFavoriteProduct = (id) => ({
	type: actionType.ADD_FAVORITE_PRODUCT,
	payload: { id },
})

export const removeFavoriteProduct = (id) => ({
	type: actionType.REMOVE_FAVORITE_PRODUCT,
	payload: { id },
})

export const listAllUsers = (usersList) => ({
	type: actionType.LIST_ALL_USERS,
	payload: { usersList },
})

export const deleteUser = (id) => ({
	type: actionType.DELETE_USER,
	payload: { id },
})
