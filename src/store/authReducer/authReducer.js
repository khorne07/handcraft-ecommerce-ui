import { SET_AUTH_CREDENTIALS, DROP_AUTH_CREDENTIALS } from './actionTypes'

const initialState = {
	authLevel: null,
	isAuthenticated: false,
	token: null,
	userId: null,
	userName: '',
}
const authReducer = (state = initialState, { payload, type }) => {
	switch (type) {
		case SET_AUTH_CREDENTIALS: {
			return {
				...state,
				authLevel: payload.authLevel,
				isAuthenticated: true,
				token: payload.token,
				userId: payload.userId,
				userName: payload.userName,
			}
		}
		case DROP_AUTH_CREDENTIALS: {
			localStorage.removeItem('Auth_Credentials')
			return {
				...state,
				authLevel: null,
				isAuthenticated: false,
				token: null,
				userId: null,
				userName: '',
			}
		}
		default:
			return state
	}
}
export default authReducer
