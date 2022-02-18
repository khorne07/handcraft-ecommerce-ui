import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:4000/API_v1.0.0',
	timeout: 8000,
	timeoutErrorMessage: 'Time Out: Request aborted',
	headers: {
		'Content-Type': 'application/json',
	},
})
export default instance
