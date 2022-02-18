import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import RemoveIcon from '@material-ui/icons/DeleteForever'
import { Tooltip } from 'components'
import Popover from 'components/Common/Popover'
import EditProductForm from './EditProductForm'

const AdminActions = ({ anchor, clickDelete, clickEdit, id, ...props }) => (
	<>
		<Tooltip title="Edit">
			<IconButton aria-label="Edit" color="inherit" onClick={clickEdit}>
				<EditIcon color="secondary" />
			</IconButton>
		</Tooltip>
		<Popover anchor={anchor}>
			<EditProductForm id={id} {...props} />
		</Popover>
		<Tooltip title="Delete">
			<IconButton aria-label="Delete" color="inherit" onClick={clickDelete}>
				<RemoveIcon color="error" />
			</IconButton>
		</Tooltip>
	</>
)
AdminActions.propTypes = {
	anchor: PropTypes.object,
	clickDelete: PropTypes.func,
	clickEdit: PropTypes.func,
	id: PropTypes.number,
}
export default AdminActions
