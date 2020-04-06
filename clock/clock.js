function getDate() {
  const nowDate = new Date()
  return {
    day: nowDate.getDate(),
    monthsYear: `${nowDate.toLocaleString('en', { month: 'short' })}, ${nowDate.getFullYear()}`,
    dayWeek: nowDate.toLocaleDateString('en', { weekday: 'long' })
  }
}

document.addEventListener(
  'DOMContentLoaded',
  function () {
    const day = document.getElementById('date__day')
    const monthYear = document.getElementById('date__month-year')
    const dayWeek = document.getElementById('date__day-week')
    const stringDate = getDate()
    if (day) {
      day.innerHTML = stringDate.day
    }
    if (monthYear) {
      monthYear.innerHTML = stringDate.monthsYear
    }
    if (dayWeek) {
      dayWeek.innerHTML = stringDate.dayWeek
    }
  },
  false,
)
