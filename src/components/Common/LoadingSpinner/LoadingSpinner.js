import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles(() => ({
	wrapper: {
		position: 'relative',
	},
	spinnerContainer: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		backgroundColor: '#fff',
		opacity: 0.5,
		zIndex: 100,
	},
	spinnerCentered: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
}))
const UpdatingBlock = ({ children, condition }) => {
	const classes = useStyles()
	return (
		<div className={classes.wrapper}>
			{condition && (
				<div className={classes.spinnerContainer}>
					<div className={classes.spinnerCentered}>
						<CircularProgress color="primary" />
					</div>
				</div>
			)}
			{children}
		</div>
	)
}
UpdatingBlock.propTypes = {
	children: PropTypes.node,
	condition: PropTypes.bool,
}
export default UpdatingBlock
