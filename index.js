function findMatching(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.toUpperCase() === name.toUpperCase();2
  })
}