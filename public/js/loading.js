// Show loading spinner
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loading-spinner").style.display = "block";
});

// Hide loading spinner when page and scripts are fully loaded
window.addEventListener("load", () => {
  document.getElementById("loading-spinner").style.display = "none";
});
