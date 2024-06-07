//Compétences
document.addEventListener("DOMContentLoaded", function () {
  const progressPercentages = {
    HTML: 90,
    CSS: 80,
    React: 60,
    JavaScript: 70,
    Node: 60,
  };

  const progressIDs = {
    HTML: "html-progress",
    CSS: "css-progress",
    React: "react-progress",
    JavaScript: "js-progress",
    Node: "node-progress",
  };

  for (let technologie in progressPercentages) {
    if (progressPercentages.hasOwnProperty(technologie)) {
      const progressBarID = progressIDs[technologie];
      const progressBar = document.getElementById(progressBarID);
      const percentage = progressPercentages[technologie];
      if (progressBar) {
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
      }
    }
  }
});
