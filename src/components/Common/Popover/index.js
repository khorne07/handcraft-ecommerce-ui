import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Popover from './Popover'

const Container = ({ anchor, children }) => {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)
	useEffect(() => {
		anchor ? setAnchorEl(anchor) : setAnchorEl(null)
		return () => {
			setAnchorEl(null)
		}
	}, [anchor])
	const id = open ? 'simple-popover' : undefined
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Popover anchor={anchorEl} handleClose={handleClose} id={id} open={open}>
			{children}
		</Popover>
	)
}
Container.propTypes = {
	anchor: PropTypes.object,
	children: PropTypes.node,
}
export default Container
