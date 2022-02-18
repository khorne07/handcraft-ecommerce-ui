import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

const GridContainer = ({ children, ...props }) => (
	<Grid container {...props}>
		{children}
	</Grid>
)
GridContainer.propTypes = {
	children: PropTypes.node,
}
export default GridContainer
