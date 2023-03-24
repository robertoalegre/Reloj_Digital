function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);
}

function formatTime(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

setInterval(updateClock, 1000);
