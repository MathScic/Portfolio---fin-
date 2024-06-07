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
