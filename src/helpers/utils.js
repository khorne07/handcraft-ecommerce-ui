export const round = (number, precision = 2) => {
	const factor = 10 ** precision
	const product = Math.round(number * factor * 10) / 10
	return Math.round(product) / factor
}

export const isValidEmail = (value) => {
	const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return emailRegex.test(String(value).toLowerCase())
}
