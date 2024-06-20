/**
 * The function `getDateInDDMMYYYFormat` takes a date string as input and returns the date in
 * DD/MM/YYYY format.
 * @param {string} date - The `date` parameter in the `getDateInDDMMYYYFormat` function is a string
 * representing a date in any valid format that can be converted to a JavaScript `Date` object.
 * @returns The function `getDateInDDMMYYYFormat` takes a date string as input, converts it to a Date
 * object, and then returns a formatted date string in the format "DD/MM/YYYY".
 */
const getDateInDDMMYYYFormat = (date: string) => {
	const fomrattedDate = new Date(date)
	return `${fomrattedDate.getDate()}/${fomrattedDate.getMonth()}/${fomrattedDate.getUTCFullYear()}`
}

export {getDateInDDMMYYYFormat}
