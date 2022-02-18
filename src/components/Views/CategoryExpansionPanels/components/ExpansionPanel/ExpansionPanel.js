import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import { Box, IconButton, Typography } from '@material-ui/core'
import ProductCards from 'components/Common/ProductCard'
import { Tooltip } from 'components'
import AddIcon from '@material-ui/icons/AddCircle'

const CustomExpansionPanel = ({
	authLevel,
	id,
	category,
	expanded,
	products,
	switchPanel,
	clickAdd,
}) => (
	<ExpansionPanel expanded={expanded} onChange={switchPanel(category)} square>
		<ExpansionPanelSummary aria-controls={`${category}panel-content`} id={id}>
			<Box display="flex" justifyContent="space-between" flexGrow={1}>
				<Typography variant="h6">{category}</Typography>
				{authLevel > 1 && (
					<Tooltip title="Add Product">
						<IconButton aria-label="Add" color="inherit" onClick={clickAdd}>
							<AddIcon color="error" />
						</IconButton>
					</Tooltip>
				)}
			</Box>
		</ExpansionPanelSummary>
		<ExpansionPanelDetails>
			<ProductCards products={products} />
		</ExpansionPanelDetails>
	</ExpansionPanel>
)
CustomExpansionPanel.propTypes = {
	category: PropTypes.string,
	expanded: PropTypes.bool,
	id: PropTypes.number,
	index: PropTypes.number,
	products: PropTypes.array,
	switchPanel: PropTypes.func,
}
export default CustomExpansionPanel

const ExpansionPanel = withStyles({
	root: {
		border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			display: 'none',
		},
		'&$expanded': {
			margin: 'auto',
		},
	},
	expanded: {},
})(MuiAccordion)

const ExpansionPanelSummary = withStyles({
	root: {
		backgroundColor: '#282d35',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		textTransform: 'capitalize',
		'&$expanded': {
			minHeight: 56,
		},
	},
	content: {
		'&$expanded': {
			margin: '12px 0',
		},
	},
	expanded: {},
})(MuiAccordionSummary)

const ExpansionPanelDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiAccordionDetails)
