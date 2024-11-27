document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("toggle-boton");
    const contenido = document.getElementById("contenido-expandible");

    boton.addEventListener("click", function () {
        if (contenido.style.maxHeight) {
            // Colapsar
            contenido.style.maxHeight = null;
            boton.textContent = "Leer más...";
        } else {
            // Expandir
            contenido.style.maxHeight = contenido.scrollHeight + "px";
            boton.textContent = "Leer menos...";
        }
    });
});
