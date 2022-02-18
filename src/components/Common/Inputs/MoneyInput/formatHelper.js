import {
	EMPTY_INPUT,
	MAX_DECIMAL_PART,
	MAX_NUMBER_PART,
	ONLY_DECIMAL_DOT,
	ONLY_NUMBER_PART,
} from './constants'

const acceptedChars = /[\d.]+/g

const splitEntry = entry => {
	const parsedEntry = (entry.match(acceptedChars) || []).join('')
	return parsedEntry.split('.')
}

const removeLeftPositionZeros = numberPart => {
	while (numberPart.length > 1 && numberPart.startsWith('0'))
		numberPart = numberPart.slice(1)
	return numberPart
}

const inputCases = (newNumberPart, newDecimalPart, maxDigits) => {
	if (newNumberPart === null && newDecimalPart === undefined) return EMPTY_INPUT
	if (newNumberPart === null && newDecimalPart === '') return ONLY_DECIMAL_DOT
	if (newNumberPart === '0' && newDecimalPart === undefined)
		return ONLY_DECIMAL_DOT
	if (newNumberPart) {
		if (newNumberPart.length > maxDigits && newDecimalPart === undefined)
			return MAX_NUMBER_PART
		if (newDecimalPart === undefined) return ONLY_NUMBER_PART
	}
	if (newDecimalPart) if (newDecimalPart.length > 2) return MAX_DECIMAL_PART
	return
}

export const formatOnChange = (newValue, value, maxDigits) => {
	let [newNumberPart, newDecimalPart] = splitEntry(newValue)
	let [numberPart, decimalPart] = splitEntry(value)
	newNumberPart = newNumberPart || null
	switch (inputCases(newNumberPart, newDecimalPart, maxDigits)) {
		case EMPTY_INPUT:
			return ''
		case ONLY_DECIMAL_DOT:
			if (numberPart === '0' && decimalPart === '') return numberPart
			else {
				newNumberPart = '0'
				newDecimalPart = ''
			}
			break
		case ONLY_NUMBER_PART:
			return newNumberPart
		case MAX_NUMBER_PART: {
			newDecimalPart = newNumberPart[maxDigits]
			const tempNumber = newNumberPart
				.split('')
				.splice(0, maxDigits)
				.join('')
			newNumberPart = tempNumber
			break
		}
		case MAX_DECIMAL_PART:
			newNumberPart = newNumberPart || '0'
			newDecimalPart = decimalPart
			break
		default:
			newNumberPart = !newNumberPart
				? ''
				: newNumberPart.length > maxDigits
					? numberPart
					: newNumberPart
			break
	}
	return `${newNumberPart}.${newDecimalPart}`
}

export const formatOnBlur = value => {
	if (value === '' || value === undefined) return ''
	let [numberPart, decimalPart] = splitEntry(value)
	numberPart = numberPart === '' ? '0' : removeLeftPositionZeros(numberPart)
	decimalPart = !decimalPart
		? '00'
		: decimalPart.length === 1
			? decimalPart + '0'
			: decimalPart
	return `${numberPart}.${decimalPart}`
}
