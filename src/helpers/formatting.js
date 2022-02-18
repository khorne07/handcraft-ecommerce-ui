export function formatPhoneNumber(phone) {
	const cleaned = ('' + phone).replace(/\D/g, '')
	const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
	if (match) {
		return '(' + match[1] + ') ' + match[2] + '-' + match[3]
	}
	return ''
}

export const hideSSN = (value) => `***-**-${value.split(/\d{5}/)[1]}`

export const capitalize = (value) =>
	value.toLowerCase().replace(/^./, value[0].toUpperCase())

export const lastCharacteres = (value, character) =>
	value.slice(value.length - character, value.length)

export const subString = (value, min, max) => `${value.substring(min, max)}...`

export const formatMoneyValue = (value) => {
	const values = String(value).split('.')
	return values.length > 1
		? `$ ${values[0]},${values[1]} `
		: `$ ${values[0]},00`
}

const onlyIntChars = /[^\d]/g
const onlyFloatChars = /[^\d.]/g

export const removeChars = (string, regex = onlyIntChars) =>
	string.replace(regex, '')

export const parseStringToInt = (string) => parseInt(removeChars(string))

export const parseStringToFloat = (string) =>
	parseFloat(removeChars(string, onlyFloatChars))
