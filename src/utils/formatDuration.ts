export function formatDuration(minutes: number): string {
	const hours = Math.floor(minutes / 60)
	const remainingMinutes = minutes % 60

	const hoursText = hours > 0 ? `${hours} ${getHourWord(hours)}` : ''
	const minutesText =
		remainingMinutes > 0
			? `${remainingMinutes} ${getMinuteWord(remainingMinutes)}`
			: ''

	return `${hoursText} ${minutesText}`.trim()
}

function getHourWord(hours: number): string {
	if (hours % 10 === 1 && hours % 100 !== 11) return 'час'
	if ([2, 3, 4].includes(hours % 10) && ![12, 13, 14].includes(hours % 100))
		return 'часа'
	return 'часов'
}

function getMinuteWord(minutes: number): string {
	if (minutes % 10 === 1 && minutes % 100 !== 11) return 'минута'
	if ([2, 3, 4].includes(minutes % 10) && ![12, 13, 14].includes(minutes % 100))
		return 'минуты'
	return 'минут'
}
