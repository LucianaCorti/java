let carritoCompras = JSON.parse(localStorage.getItem("carritoCompras")) || [];
const carritoProductos = document.querySelector(".carritoCompras");
function agregarAlCarrito() {
  carritoProductos.innerHTML = "";
  carritoCompras.forEach((producto) => {
    carritoProductos.innerHTML += `<div class="card">
      <h5 class="card-title text-decoration-underline m-2">Carrito Compras</h5>
      <img class="card-img-top" src=${producto.foto}>
      <div class="card-body">
      <h5 class="card-title text-decoration-underline">${producto.nombre}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text">Cantidad agregada:${producto.cantidad}</p>
      <button type="button" class="btn btn-dark m-3 fs-6" id="btnCardsBorrar${producto.id}">Quitar del carrito</button>
      <button type="button" class="btn btn-dark m-3 fs-6" id="btnCardsRestar${producto.id}">Restar</button>
    </div>
    </div>
    `;
  });
  localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
  quitarDelCarrito();
  funcionBotonesRestar();
}
agregarAlCarrito();

function quitarDelCarrito() {
  carritoCompras.forEach((producto) => {
    document
      .querySelector(`#btnCardsBorrar${producto.id}`)
      .addEventListener("click", () => {
        carritoCompras = carritoCompras.filter(
          (producto3) => producto3.id !== producto.id
        );
        agregarAlCarrito();
      });
  });
}

function carritoRestar(producto) {
  let restarProd = carritoCompras.find((prod8) => prod8.id === producto.id);
  producto.cantidad--;

  agregarAlCarrito();
}

function funcionBotonesRestar() {
  carritoCompras.forEach((producto) => {
    document
      .querySelector(`#btnCardsRestar${producto.id}`)
      .addEventListener("click", () => {
        carritoRestar(producto);
        console.log("click");
      });
  });
}
