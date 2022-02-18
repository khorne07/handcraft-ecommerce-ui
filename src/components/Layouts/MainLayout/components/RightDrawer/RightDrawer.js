import React from 'react'
import PropTypes from 'prop-types'
import { Drawer } from '@material-ui/core'

const RightDrawer = ({ children, open, handleClose }) => (
	<Drawer anchor="right" onClose={handleClose} open={open} variant="temporary">
		{children}
	</Drawer>
)
RightDrawer.propTypes = {
	children: PropTypes.node,
	handleClose: PropTypes.func,
	open: PropTypes.bool,
}
export default RightDrawer
