document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("showLetter").addEventListener("click", function () {
        let carta = document.querySelector(".letter");
        
        if (carta) {
            carta.style.display = "block"; // Muestra la carta
        } else {
            console.log("No se encontró el elemento .letter");
        }
    });
});
// Función para abrir el modal y mostrar la imagen
function openModal(imgElement) {
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("modalImage");
    
    modal.style.display = "block";  // Muestra el modal
    modalImg.src = imgElement.src;  // Establece la fuente de la imagen en el modal
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("photoModal");
    modal.style.display = "none";  // Oculta el modal
}

document.getElementById("cuteCat").addEventListener("click", function() {
    // Mensaje sorpresa
    alert("¡Miau! Sofi, eres la persona más linda del mundo 🐱❤️");
});

// Seleccionamos el botón
const playButton = document.getElementById("playMusic");

// Creamos un objeto de audio con la canción
const song = new Audio("kevin kaarl - Abrazado a Ti.mp3");

// Variable para saber si la música está sonando
let isPlaying = false;

// Función para reproducir o pausar la música
playButton.addEventListener("click", function() {
    if (isPlaying) {
        song.pause();
        playButton.innerText = "🎶 Reproducir nuestra canción";
    } else {
        song.play();
        playButton.innerText = "⏸️ Pausar música";
    }
    isPlaying = !isPlaying;
});
