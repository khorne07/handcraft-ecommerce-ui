/* eslint-disable no-mixed-spaces-and-tabs */
import {
	DELETE_PRODUCT,
	UPDATE_PRODUCT,
	EXPAND_CATEGORY_PANEL,
	SET_CATEGORIES,
} from './actionTypes'

const initialState = {
	categories: [],
	activePanel: '',
}

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CATEGORIES: {
			return {
				...state,
				categories: [...action.categories],
				activePanel: action.categories[0].categoryName,
			}
		}
		case EXPAND_CATEGORY_PANEL: {
			const panel = state.activePanel
			return {
				...state,
				activePanel:
					action.panel.isExpanded && panel !== action.panel.category
						? action.panel.category
						: '',
			}
		}
		case DELETE_PRODUCT: {
			const categories = state.categories.map((category) => ({
				...category,
				products: category.products.filter(
					(product) => product.id !== action.productId
				),
			}))
			return {
				...state,
				categories: categories,
			}
		}
		case UPDATE_PRODUCT: {
			const updatedProducts = []
			let indexInCat
			state.categories.forEach((category) => {
				indexInCat =
					category.id === action.updatedInfo.old.catId &&
					category.products.findIndex(
						(product) => product.id === action.updatedInfo.old.id
					)
				updatedProducts.push(
					indexInCat !== -1
						? category.products.splice(
								indexInCat,
								1,
								action.updatedInfo.updatedFields
						  )[0]
						: category
				)
			})
			console.log(indexInCat)
			const newState = {
				...state,
				categories: [...updatedProducts],
			}

			return {
				...newState,
			}
		}
		default:
			return state
	}
}
export default productsReducer
