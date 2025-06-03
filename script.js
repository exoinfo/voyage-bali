function showSection(id, element) {
  document.querySelectorAll("main section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
  element.classList.add("active");
}

document.getElementById("reservation-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = this.nom.value;
  const email = this.email.value;
  const date = this.date.value;
  const personnes = this.personnes.value;
  const message = this.message.value;

  console.log("Réservation simulée :", { nom, email, date, personnes, message });

  document.getElementById("confirmation-message").style.display = "block";
  this.reset();
});
