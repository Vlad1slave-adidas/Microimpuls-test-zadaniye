export const getSeasonsText = (seasons: number) => {
	const lastDigit = seasons % 10
	const lastTwoDigits = seasons % 100

	if (lastDigit === 1 && lastTwoDigits !== 11) {
		return `${seasons} Сезон`
	}
	if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
		return `${seasons} Сезона`
	}
	return `${seasons} Сезонов`
}
