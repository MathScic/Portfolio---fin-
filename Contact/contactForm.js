document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("208rQ8DCIbG-ekfeO");

  const contactForm = document.getElementById("contact-form");
  const popup = document.getElementById("popup");
  const closeButton = document.querySelector(".close");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validation basique (vérifie si les champs ne sont pas vides)
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      message.trim() === ""
    ) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);

    // Envoyer les données avec EmailJS
    emailjs
      .send("service_0ekhnj9", "template_02uvceo", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: message,
        to_email: "your-email@example.com", // Remplacez par votre adresse e-mail
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);

          // Affiche popup
          popup.style.display = "block";

          // Réinitialiser formulaire après 5 secondes
          setTimeout(function () {
            contactForm.reset();
            popup.style.display = "none";
          }, 5000);
        },
        function (error) {
          console.error("FAILED...", error);
        }
      );
  });

  // Fermer le popup en cliquant sur la croix
  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
