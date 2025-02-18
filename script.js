function showTime() {
  const timeElem = document.getElementById('currentTime');
  if (timeElem) {
    timeElem.innerHTML = new Date().toUTCString();
  }
}
showTime();
setInterval(showTime, 1000);
