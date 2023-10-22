let intervalId = null;
let speed = 5; // pixels to scroll per interval
let direction = 1; // 1 for down, -1 for up

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "start_scrolling") {
    startScrolling(message.speed);
  } else if (message.type === "stop_scrolling") {
    stopScrolling();
  } else if (message.type === "update_speed") {
    speed = message.speed;
  }
});

function startScrolling(speed) {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      window.scrollBy(0, speed * direction);
    }, 50);
  }
}

function stopScrolling() {
  clearInterval(intervalId);
  intervalId = null;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    stopScrolling();
  }
});