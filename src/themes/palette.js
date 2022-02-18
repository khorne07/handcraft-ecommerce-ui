import { colors } from '@material-ui/core'

const white = '#FFFFFF'
const black = '#000000'

export default {
	black,
	white,
	primary: {
		contrastText: white,
		dark: '#2bae68',
		main: '#1c8c64',
		light: '#2bae68',
	},
	secondary: {
		contrastText: white,
		dark: '#214845',
		main: '#214845',
		light: '#206955',
	},
	success: {
		contrastText: white,
		dark: colors.green[900],
		main: colors.green[600],
		light: colors.green[400],
	},
	info: {
		contrastText: white,
		dark: colors.blue[900],
		main: colors.blue[600],
		light: colors.blue[400],
	},
	warning: {
		contrastText: white,
		dark: colors.orange[900],
		main: colors.orange[600],
		light: colors.orange[400],
	},
	error: {
		contrastText: white,
		dark: colors.red[900],
		main: colors.red[600],
		light: colors.red[400],
	},
	text: {
		primary: colors.blueGrey[900],
		secondary: colors.blueGrey[600],
		link: colors.blue[600],
	},
	background: {
		default: '#121212',
		paper: '#20252d',
	},
	icon: colors.blueGrey[600],
	divider: colors.grey[200],
	hover: 'rgb(245, 245, 245)',
	type: 'dark',
}
