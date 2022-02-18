import React from 'react'
import Layout from 'components/Layouts/MainLayout'
import { Switch, Route } from 'react-router-dom'
import Content from '../mocks/content'
import ExpansionPanels from 'components/Views/CategoryExpansionPanels'
import UserManegementTable from 'components/Views/UserManagement'
import {
	HOME_URL,
	PRODUCT_STORE_URL,
	// SPECIAL_OFFERS_URL,
	// DASHBOARD_URL,
	USERS_MANAGEMENT_URL,
} from 'constants/urls'

const App = () => {
	return (
		<Layout>
			<Switch>
				<Route component={Content} exact path={HOME_URL} />
				<Route component={ExpansionPanels} path={PRODUCT_STORE_URL} />
				<Route component={UserManegementTable} path={USERS_MANAGEMENT_URL} />
			</Switch>
		</Layout>
	)
}
export default App
