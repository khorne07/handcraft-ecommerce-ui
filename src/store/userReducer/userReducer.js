import {
	ADD_FAVORITE_PRODUCT,
	DELETE_USER,
	LIST_ALL_USERS,
	REMOVE_FAVORITE_PRODUCT,
} from './actionTypes'

const initialState = {
	favoriteProducts: [],
	usersList: [],
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE_PRODUCT: {
			const favoriteArray = [...state.favoriteProducts, action.payload.id]
			return {
				...state,
				favoriteProducts: favoriteArray,
			}
		}
		case REMOVE_FAVORITE_PRODUCT: {
			const favoriteArray = [...state.favoriteProducts]
			const productIndex = favoriteArray.findIndex(
				(prod) => prod === action.payload.id
			)
			favoriteArray.splice(productIndex, 1)
			return {
				...state,
				favoriteProducts: favoriteArray,
			}
		}
		case LIST_ALL_USERS: {
			const usersList = action.payload.usersList
			return {
				...state,
				usersList,
			}
		}
		case DELETE_USER: {
			const newUsersList = state.usersList.filter(
				(user) => user.id !== action.payload.id
			)
			console.log(action.payload.id)
			console.log(newUsersList)
			return {
				...state,
				usersList: newUsersList,
			}
		}
		default:
			return state
	}
}
export default userReducer
