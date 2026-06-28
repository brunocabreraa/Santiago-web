// ESPERAR A QUE LA WEB CARGUE POR COMPLETO
document.addEventListener("DOMContentLoaded", () => {
    
    // Capturar los elementos del DOM
    const tarjetas = document.querySelectorAll(".tarjeta-edicion");
    const modal = document.getElementById("modal-visor");
    const modalImg = document.getElementById("modal-imagen");
    const modalLink = document.getElementById("modal-link-pdf");
    const btnCerrar = document.querySelector(".btn-cerrar");

    // Al hacer clic en cualquier portada
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {
            const rutaImagen = tarjeta.querySelector("img").src;
            const rutaPDF = tarjeta.getAttribute("data-pdf");

            // Cargar datos dentro del visor flotante
            modalImg.src = rutaImagen;
            modalLink.href = rutaPDF;

            // Mostrar el visor cambiando el display de CSS
            modal.style.display = "flex";
        });
    });

    // Cerrar el visor al hacer clic en la "X"
    btnCerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar el visor también si el usuario hace clic afuera de la caja negra
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});