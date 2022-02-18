import React from 'react'
import PropTypes from 'prop-types'
import { Popover as MuiPopover } from '@material-ui/core'

const Popover = ({ anchor, children, handleClose, id, open }) => (
	<MuiPopover
		anchorEl={anchor}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		id={id}
		onClose={handleClose}
		open={open}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
	>
		{children}
	</MuiPopover>
)
Popover.propTypes = {
	anchor: PropTypes.object,
	children: PropTypes.node,
	handleClose: PropTypes.func,
	id: PropTypes.string,
	open: PropTypes.bool,
}
export default Popover
