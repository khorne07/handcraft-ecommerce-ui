import { SET_AUTH_CREDENTIALS, DROP_AUTH_CREDENTIALS } from './actionTypes'

export const setAuthCredentials = (data) => ({
	type: SET_AUTH_CREDENTIALS,
	payload: {
		token: data.token,
		authLevel: data.authLevel,
		userId: data.id,
		userName: data.userName,
	},
})

export const dropAuthCredentials = () =>({type: DROP_AUTH_CREDENTIALS})