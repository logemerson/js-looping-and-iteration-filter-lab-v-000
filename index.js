function findMatching(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.toUpperCase() === name.toUpperCase();
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.startsWith(string);
  })
}

function matchName(drivers, string) {
  return drivers.filter(function(driver, string){
    return driver.name === driver.string;
  })
}