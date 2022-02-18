import React from 'react'
import PropTypes from 'prop-types'
import MuiTooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'

const Tooltip = ({ title, children, ...props }) => (
	<CustomTooltip arrow placement="top" title={title} {...props}>
		{children}
	</CustomTooltip>
)
Tooltip.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
}
export default Tooltip

const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: theme.palette.primary.dark,
		fontSize: '0.875rem',
	},
	arrow: {
		color: theme.palette.primary.dark,
	},
}))(MuiTooltip)
