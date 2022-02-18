import * as actionType from './actionTypes'

export const expandPanel = (category, isExpanded) => ({
	type: actionType.EXPAND_CATEGORY_PANEL,
	panel: { category, isExpanded },
})
export const setCategories = (categories) => ({
	type: actionType.SET_CATEGORIES,
	categories,
})
export const deleteProduct = (productId) => ({
	type: actionType.DELETE_PRODUCT,
	productId,
})
export const updateProduct = (updatedInfo) => ({
	type: actionType.UPDATE_PRODUCT,
	updatedInfo,
})
