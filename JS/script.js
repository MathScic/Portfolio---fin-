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

document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.getElementById("projects");
  const modal = document.getElementById("project-modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalTechnologies = document.getElementById("modal-technologies");
  const closeBtn = document.querySelector(".close");

  let projectsData;

  // Ajout de l'event au clique aux cartes après chargement des données
  function addClickEventToCards() {
    projectsContainer.addEventListener("click", function (event) {
      const clickedProject = event.target.closest(".project-card");
      if (!clickedProject) return;

      const index = Array.from(clickedProject.parentNode.children).indexOf(
        clickedProject
      );
      const projectData = projectsData[index];
      if (projectData) {
        displayModal(projectData);
      }
    });
  }

  fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
      projectsData = data;
      addClickEventToCards(); // Ajouter l'événement après chargement des données
    })
    .catch((error) =>
      console.error(
        "Une erreur s'est produite lors du chargement des projets:",
        error
      )
    );

  // fonction pour afficher la modal
  function displayModal(projectData) {
    modalImage.src = projectData.image;
    modalTitle.innerText = projectData.title;
    modalDescription.innerText = projectData.description;
    modalTechnologies.innerText =
      "Technologies utilisées : " + projectData.technologies;

    modal.style.display = "block";
  }

  // Ferme la modal au click
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Ferme modal quand utilisateur clique en dehors de celle-ci.
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

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

//Contact
// document.addEventListener("DOMContentLoaded", function () {
//   emailjs.init("zG5tn144UYUbimbin"); // Remplacez par votre User ID EmailJS

//   const contactForm = document.getElementById("contact-form");
//   const popup = document.getElementById("popup");
//   const closeButton = document.querySelector(".close");

//   contactForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const firstName = document.getElementById("first-name").value;
//     const lastName = document.getElementById("last-name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     // Validation basique (vérifie si les champs ne sont pas vides)
//     if (
//       firstName.trim() === "" ||
//       lastName.trim() === "" ||
//       email.trim() === "" ||
//       message.trim() === ""
//     ) {
//       alert("Veuillez remplir tous les champs.");
//       return;
//     }

//     // Envoyer les données avec EmailJS
//     emailjs
//       .send("Math Scicluna ", "template_02uvceo", {
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         message: message,
//       })
//       .then(
//         function (response) {
//           console.log("SUCCESS!", response.status, response.text);
//           // Afficher le popup
//           popup.style.display = "block";

//           // Réinitialiser le formulaire après 5 secondes
//           setTimeout(function () {
//             contactForm.reset();
//             popup.style.display = "none";
//           }, 5000);
//         },
//         function (error) {
//           console.error("FAILED...", error);
//         }
//       );
//   });

//   // Fermer le popup en cliquant sur la croix
//   closeButton.addEventListener("click", function () {
//     popup.style.display = "none";
//   });
// });
