//Animation sur la partie presentation
document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector(".name");
  const workElement = document.querySelector(".work");

  const name = " Je suis Mathieu Scicluna";
  const work = "Developpeur Web Frontend";

  animateText(nameElement, name, 60);
  animateText(workElement, work, 40);
});

function animateText(element, text, delay) {
  let index = 0;

  function addLetter() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(addLetter, delay);
    }
  }

  addLetter();
}

//Animation de fluidité sur toute la page lorsqu'on clique sur les liens d'ancrage
document.addEventListener("DOMContentLoaded", function () {
  //gestion du defilement fluide
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.getElementById("projects");

  // Charge les données des projets à partir du fichier JSON
  fetch("projects.json")
    .then((response) => response.json())
    .then((projectsData) => {
      generateProjectCards(projectsData);
    })
    .catch((error) => console.error("Une erreur s'est produite:", error));

  // Générer les cartes de projets
  function generateProjectCards(projectsData) {
    projectsContainer.innerHTML = "";
    projectsData.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-details">
          <h3 class="project-title">${project.title}</h3>
          <a href="${project.url}" target="_blank">Voir sur GitHub</a>
        </div>
          `;
      projectsContainer.appendChild(projectCard);
    });
  }
});

