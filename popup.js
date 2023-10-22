// Get the speed input element
const speedInput = document.getElementById("speed");

// Listen for changes to the speed input
speedInput.addEventListener("change", () => {
  // Send a message to the content script with the new speed value
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {type: "update_speed", speed: parseInt(speedInput.value)});
  });
});

// Get the start button element
const startButton = document.getElementById("start-button");

// Listen for clicks on the start button
startButton.addEventListener("click", () => {
  // Send a message to the content script to start scrolling
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const speed = parseInt(speedInput.value);
    chrome.tabs.sendMessage(tabs[0].id, {type: "start_scrolling", speed: speed});
  });
});

// Get the stop button element
const stopButton = document.getElementById("stop-button");

// Listen for clicks on the stop button
stopButton.addEventListener("click", () => {
  // Send a message to the content script to stop scrolling
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {type: "stop_scrolling"});
  });
});