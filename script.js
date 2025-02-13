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

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("playMusic");
    if (button) {
        button.addEventListener("click", function() {
            const audio = document.getElementById("bgMusic");
            audio.play();
        });
    } else {
        console.error('No se encontró el botón "playMusic"');
    }
});
