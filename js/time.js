setInterval(getTime, 1000)

function getTime () {
  var today = new Date()
  var hourNow = today.getHours()
  var minNow = today.getMinutes()
  var secNow = today.getSeconds()
  hourNow = checkTime(hourNow)
  minNow = checkTime(minNow)
  secNow = checkTime(secNow)
  document.getElementById('time').innerHTML =
  hourNow + ':' + minNow + ':' + secNow
}

function checkTime (i) { // add zero in front of numbers < 10
  if (i < 10) {
    i = '0' + i
  }
  return i
}
