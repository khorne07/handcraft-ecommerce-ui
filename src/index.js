import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from 'store/store'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from 'themes/darkTheme'
import App from 'components/App/App'

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root'),
)
