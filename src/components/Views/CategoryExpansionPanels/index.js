import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { expandPanel, setCategories } from 'store/productsReducer/actions'
import CategoryExpansionPanels from './CategoryExpansionPanels'
import axios from 'components/App/axios'

const Container = () => {
	const categories = useSelector((state) => state.products.categories)
	const panelExpanded = useSelector((state) => state.products.activePanel)
	const dispatch = useDispatch()
	useEffect(() => {
		axios
			.get('/categories')
			.then((res) => dispatch(setCategories(res.data)))
			.catch((error) => console.log(error))
	}, [])
	const handleSwitchPanel = (category, isExpanded) => {
		dispatch(expandPanel(category, isExpanded))
	}
	return (
		<CategoryExpansionPanels
			categories={categories}
			panelExpanded={panelExpanded}
			switchPanel={(category, isExpanded) =>
				handleSwitchPanel(category, isExpanded)
			}
		/>
	)
}
export default Container
