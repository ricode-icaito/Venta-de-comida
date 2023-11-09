const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Enviar información del pedido
    form.style.display = "none";
    const mensaje = document.createElement("p");
    mensaje.textContent = "¡Gracias por su pedido! Lo estaremos entregando en breve.";
    document.body.appendChild(mensaje);
});

const precios = {
    "1": 10,
    "2": 12,
    "3": 15
};
const select = document.querySelector("select");
const precioTotal = document.querySelector("#precio-total");
select.addEventListener("change", (event) => {
    precioTotal.textContent = `Precio total: $ ${precios[event.target.value]}`;
});
