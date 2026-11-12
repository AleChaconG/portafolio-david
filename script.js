// Esta función se activa cuando hacemos scroll
function reveal() {
    // Busca todos los elementos que tengan la clase "reveal"
    var reveals = document.querySelectorAll(".reveal");

    // Recorre cada elemento
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        // Cuánto tiene que subir para activarse
        var elementVisible = 100; 

        // Si el elemento está en la pantalla, le agregamos la clase "active"
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Ejecutamos la función al cargar la página y cada vez que se hace scroll
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);