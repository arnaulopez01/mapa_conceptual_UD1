// Elementos del modal
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const viewNotesBtn = document.getElementById("view-notes");
const viewVideoBtn = document.getElementById("view-video");

// Variables para almacenar el PDF y el video
let currentPdf = "";
let currentVideo = "";

// Función para abrir el modal
function openModal(pdf, video) {
  currentPdf = pdf;
  currentVideo = video;
  modal.style.display = "flex";
}

// Función para cerrar el modal
function closeModal() {
  modal.style.display = "none";
}

// Evento para cerrar el modal al hacer clic en la "X"
closeBtn.addEventListener("click", closeModal);

// Evento para cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Evento para abrir el PDF
viewNotesBtn.addEventListener("click", () => {
  window.open(currentPdf, "_blank");
  closeModal();
});

// Evento para abrir el video de YouTube
viewVideoBtn.addEventListener("click", () => {
  window.open(currentVideo, "_blank");
  closeModal();
});

// Evento para manejar los clics en los enlaces
document.querySelectorAll(".open-modal").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const pdf = link.getAttribute("data-pdf");
    const video = link.getAttribute("data-video");
    openModal(pdf, video);
  });
});

// Script para manejar el acordeón
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordion = header.parentElement;
    accordion.classList.toggle("active");
  });
});