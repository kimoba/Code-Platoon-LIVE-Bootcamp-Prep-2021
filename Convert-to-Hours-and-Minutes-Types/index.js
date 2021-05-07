function hoursMinutes(minutes) {
  let hours = (minutes - minutes % 60) / 60  // get hours by dividing minutes subtracted by the remainder by 60
  let remainingMinutes = minutes % 60  // get remainder from dividing minutes by 60
  let isMinutePlural = remainingMinutes === 1 ? "minute" : "minutes"
  let isHourPlural = hours === 1 ? "hour" : "hours"
  //console.log(hours, minutes) // check values

  // TERNARY OPERATOR
  // condition ? exprIfTrue : exprIfFalse
  // let isHourPlural = hours === 1 ? "hour" : "hours"
  // IS BASICALLY:
  // if (hours === 1) {
  //   isHourPlural = "hour"
  // } else {
  //   isHourPlura = "hours"
  // }

  return `${hours} ${isHourPlural} and ${remainingMinutes} ${isMinutePlural}`
}

hoursMinutes(125) // => '2 hours and 5 minutes'
hoursMinutes(75) // => '1 hour and 15 minutes'
hoursMinutes(55) // => '0 hours and 55 minutes'
hoursMinutes(121) // => '2 hours and 1 minute'