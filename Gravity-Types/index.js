function weightOnX(accOnX, weightOnEarth) {
  const accDueToEarthGrav = 9.8
  weight = (accOnX/accDueToEarthGrav) * weightOnEarth
  return weight
}

weightOnX(10, 10780)