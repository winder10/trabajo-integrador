document.addEventListener("DOMContentLoaded", () => {
    // 1. Interacción en el Menú: Seleccionar pizzas y manipular el DOM
    const botonesPedir = document.querySelectorAll(".btn-pedir");
    botonesPedir.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const card = e.target.closest(".pizza-card");
            const pizzaTitulo = card.querySelector("h2").textContent;
            
            alert(`¡Agregaste ${pizzaTitulo} a tu pedido!`);
            
            // Modificación dinámica del DOM (requerimiento de la Etapa 3)
            boton.textContent = "✓ Seleccionada";
            boton.style.backgroundColor = "#28a745";
            boton.style.color = "#ffffff";
        });
    });

    // 2. Interacción en la página de Contacto: Notificación al hacer clic en WhatsApp
    const btnWhatsapp = document.getElementById("btn-whatsapp");
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", () => {
            console.log("El cliente está iniciando contacto por WhatsApp.");
        });
    }
});
