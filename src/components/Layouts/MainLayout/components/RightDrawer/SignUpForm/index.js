import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import SignUpForm from './SignUpForm'
import axios from 'components/App/axios'
import { setAuthCredentials } from 'store/authReducer/actions'

const Container = ({ handleClose }) => {
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const response = await axios.post('/auth/register', {
				userName,
				email,
				password,
			})
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
		<SignUpForm
			handleSubmit={handleSubmit}
			setEmail={setEmail}
			setPassword={setPassword}
			setUserName={setUserName}
		/>
	)
}
Container.propTypes = {
	handleClose: PropTypes.func,
}
export default Container
