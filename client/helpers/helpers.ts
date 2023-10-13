export function getDateWithoutTimezone(value?: Date | number | string) {
  let date = value ?? new Date()
  date = typeof date !== 'object' ? new Date(value) : date
  const timezoneOffsetHours = date.getTimezoneOffset() / 60
  return new Date(date.setHours(date.getHours() + timezoneOffsetHours))
}

export function getDate(value?: Date | string) {
  let format = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return format.format(getDateWithoutTimezone(value))
}
