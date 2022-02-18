import React from 'react'
import { Typography, Link } from '@material-ui/core'

const Copyright = () => (
	<Typography align="center" color="textSecondary" variant="body2">
		{'Copyright © '}
		<Link color="inherit" href="https://material-ui.com/">
			Your Website
		</Link>{' '}
		{new Date().getFullYear()} {'.'}
	</Typography>
)
export default Copyright
