import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

const GridItem = ({ children, ...props }) => (
	<Grid item {...props}>
		{children}
	</Grid>
)
GridItem.propTypes = {
	children: PropTypes.node,
}
export default GridItem
