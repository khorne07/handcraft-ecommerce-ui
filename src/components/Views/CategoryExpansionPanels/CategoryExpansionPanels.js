import React from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from './components/ExpansionPanel'

const ExpansionPanels = ({ categories, panelExpanded, switchPanel }) => {
	return (
		<>
			{categories.map((category, index) => (
				<ExpansionPanel
					category={category.categoryName}
					expanded={panelExpanded === category.categoryName}
					id={category.id}
					index={index}
					key={category.id}
					products={category.products}
					switchPanel={(category) => (e, isExpanded) => {
						switchPanel(category, isExpanded)
					}}
				/>
			))}
		</>
	)
}
ExpansionPanels.propTypes = {
	categories: PropTypes.array,
	panelExpanded: PropTypes.string,
	switchPanel: PropTypes.func,
}
export default ExpansionPanels
