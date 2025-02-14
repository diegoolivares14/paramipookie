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
const song = new Audio("abrazado_a_ti.mp3");

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
 // Función para crear corazones
    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        // Establece el tamaño aleatorio para el corazón
        const size = Math.random() * 20 + 10;
        heart.style.fontSize = `${size}px`;

        // Posiciona el corazón en una ubicación aleatoria
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * -50}vh`; // Para que inicien desde la parte superior

        // Añadir el corazón al body
        document.body.appendChild(heart);

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 5000); // 5 segundos, puedes ajustar el tiempo según la duración de la animación
    }

    // Llamar a la función cada 300 ms
    setInterval(createHeart, 300);