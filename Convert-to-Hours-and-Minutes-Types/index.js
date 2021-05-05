function hoursMinutes(minutes) {
  hours = minutes / 60  // get hours by dividing minutes by 60
  minutes = minutes % 60  // get remainder from dividing minutes by 60
  //console.log(hours, minutes) // check values

  if (hours === 1 && minutes === 0) {
    // just 1 hour by itself
    return `${Math.round(hours)} hour` 
  } else if (hours === (61/60) && minutes === 1) {
    // 1 hour and 1 minutes exact
    return `${Math.round(hours)} hour and ${minutes} minute`
  } else if (minutes === 1) {
    // X hours and 1 minute
    return `${Math.round(hours)} hours and ${minutes} minute`
  } else {
    // X hours and Y minutes
    return `${Math.round(hours)} hours and ${minutes} minutes`
  }
}

hoursMinutes(121)
