import {
	HOME_URL,
	PRODUCT_STORE_URL,
	SPECIAL_OFFERS_URL,
	DASHBOARD_URL,
	USERS_MANAGEMENT_URL,
} from 'constants/urls'

export const routes = [
	{ name: 'Home', route: HOME_URL, authLevel: 1 },
	{ name: 'Dashboard', route: DASHBOARD_URL, authLevel: 3 },
	{ name: 'Products', route: PRODUCT_STORE_URL, authLevel: 1 },
	{ name: 'Offers', route: SPECIAL_OFFERS_URL, authLevel: 1 },
	{ name: 'User Management', route: USERS_MANAGEMENT_URL, authLevel: 7 },
]
