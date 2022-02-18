import { createMuiTheme } from '@material-ui/core/styles'
import { cyan, amber, red, green, blue, orange } from '@material-ui/core/colors'
import overrides from './overrides'

const white = '#FFFFFF'

const theme = createMuiTheme({
	overrides,
	palette: {
		primary: {
			main: cyan[900],
			light: cyan.A400,
		},
		secondary: {
			main: amber.A400,
			light: amber[400],
		},
		success: {
			contrastText: white,
			dark: green[900],
			main: green[600],
			light: green[400],
		},
		info: {
			contrastText: white,
			dark: blue[900],
			main: blue[600],
			light: blue[400],
		},
		warning: {
			contrastText: white,
			dark: orange[900],
			main: orange[600],
			light: orange[400],
		},
		error: {
			contrastText: white,
			dark: red[900],
			main: red[600],
			light: red[400],
		},
		type: 'dark',
		background: {
			default: '#121212',
			paper: '#20252d',
		},
	},
	extra: {
		sideBarWidth: 200,
	},
})
export default theme
