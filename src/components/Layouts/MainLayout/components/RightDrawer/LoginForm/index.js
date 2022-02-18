import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import LoginForm from './LoginForm'
import axios from 'components/App/axios'
import { isValidEmail } from 'helpers/utils'
import { setAuthCredentials } from 'store/authReducer/actions'

const Container = ({ handleClose }) => {
	const [userNameOrEmail, setUserNameOrEmail] = useState('')
	const [password, setPassword] = useState('')
	const [extended, setExtended] = useState(false)
	const dispatch = useDispatch()

	const handleSubmit = async (event) => {
		event.preventDefault()
		let requestObject
		try {
			if (isValidEmail(userNameOrEmail))
				requestObject = { email: userNameOrEmail, password, extended }
			else requestObject = { userName: userNameOrEmail, password, extended }
			const response = await axios.post('/auth/login', requestObject)
			if (response) {
				localStorage.setItem('Auth_Credentials', JSON.stringify(response.data))
				dispatch(setAuthCredentials(response.data))
			}
		} catch (error) {
			console.log(error)
		}
		handleClose()
	}
	return (
		<LoginForm
			changeExtended={() => setExtended(!extended)}
			extended={extended}
			setPassword={setPassword}
			setUserNameOrEmail={setUserNameOrEmail}
			submit={handleSubmit}
		/>
	)
}
Container.propTypes = {
	handleClose: PropTypes.func,
}
export default Container
