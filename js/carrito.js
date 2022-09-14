
let carritoCompras = JSON.parse(localStorage.getItem("carritoCompras")) || [];
const carritoProductos = document.querySelector(".carritoCompras");

const agregarAlCarrito = () => {
  carritoProductos.innerHTML = "";
  carritoCompras.forEach((producto) => {
    carritoProductos.innerHTML += `  <tbody>
    <tr>
    <div class="divCarritoCompras">
      <td>${producto.nombre}</td>
      </div>
      <div>
      <img src=${producto.foto} class="fotoCarrito">
      </div>
      <div>
      <td>Precio:$${producto.precio}</td>
      </div>
      <div>
      <td>Cantidad:${producto.cantidad}</td>
      </div>
      <div>
      <button type="button" class="btn btn-dark m-3 fs-6" id="btnCardsSumar${producto.id}">+</button>
      <button type="button" class="btn btn-dark m-3 fs-6" id="btnCardsRestar${producto.id}">-</button>
      </div>
      <button type="button" class="btn btn-dark m-3 fs-6" id="btnCardsBorrar${producto.id}">Quitar del carrito</button> 
    </div>
    `;
  });
  localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
  quitarDelCarrito();
  funcionBotonesRestar();
  funcionBotonesSumar();
};

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
        confirmacionQuitar();
        const totalCarrito = carritoCompras.reduce(
          (acumulador, producto) =>
            acumulador + producto.precio * producto.cantidad,
          0
        );
        let totalCompras = document.querySelector(".precioTotal");
        totalCompras.innerText = "Precio Total $" + totalCarrito;
      });
  });
}

const confirmacionQuitar = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "warning",
    title: "Producto eliminado",
  });
};

function carritoSumar(producto) {
  carritoCompras.find((prod9) => prod9.id === producto.id);
  producto.cantidad++;
  agregarAlCarrito();
}

function funcionBotonesSumar() {
  carritoCompras.forEach((producto) => {
    document
      .querySelector(`#btnCardsSumar${producto.id}`)
      .addEventListener("click", () => {
        carritoSumar(producto);
        const totalCarrito = carritoCompras.reduce(
          (acumulador, producto) =>
            acumulador + producto.precio * producto.cantidad,
          0
        );
        let totalCompras = document.querySelector(".precioTotal");
        totalCompras.innerText = "Precio Total $" + totalCarrito;
      });
  });
}

function carritoRestar(producto) {
  carritoCompras.find((prod8) => prod8.id === producto.id);
  producto.cantidad--;
  producto.cantidad < 1 ? (producto.cantidad = 1) : agregarAlCarrito();
}

function funcionBotonesRestar() {
  carritoCompras.forEach((producto) => {
    document
      .querySelector(`#btnCardsRestar${producto.id}`)
      .addEventListener("click", () => {
        carritoRestar(producto);
        const totalCarrito = carritoCompras.reduce(
          (acumulador, producto) =>
            acumulador + producto.precio * producto.cantidad,
          0
        );
        let totalCompras = document.querySelector(".precioTotal");
        totalCompras.innerText = "Precio Total $" + totalCarrito;
      });
  });
}

if (document.title === "Carrito") {
  if (carritoCompras.length >= 1) {
    const calcularCarrito = () => {
      const totalCarrito = carritoCompras.reduce(
        (acumulador, producto) =>
          acumulador + producto.precio * producto.cantidad,
        0
      );
      let totalCompras = document.querySelector(".precioTotal");
      totalCompras.innerText = "Precio Total $" + totalCarrito;
    };
    calcularCarrito();
  }
}

const pago = document.querySelector(".pago");

if (document.title === "Carrito") {
  if (carritoCompras.length >= 1) {
    const crearFormPago = () => {
      pago.innerHTML = ` <div class="formularioPago">                  
            <button type="button" class="btn btn-dark m-3  float-end" id="botonComprar">Comprar</button>
                          </div>`;
    };
    crearFormPago();
    finalizarCompra();
  }

  function finalizarCompra() {
    if (carritoCompras.length >= 1) {
      const botonComprar = document.querySelector("#botonComprar");
      carritoCompras.forEach((producto) => {
        botonComprar.addEventListener("click", () => {
          carritoCompras = carritoCompras.filter(
            (producto10) => producto10.id !== producto.id
          );
          setTimeout(() => {
            confirmacionCompra();
          }, 500);
          const totalCarrito = carritoCompras.reduce(
            (acumulador, producto) =>
              acumulador + producto.precio * producto.cantidad,
            0
          );
          agregarAlCarrito();
          let totalCompras = document.querySelector(".precioTotal");
          totalCompras.innerText = "Precio Total $" + totalCarrito;
        });
      });
    }
  }
}

function confirmacionCompra() {
  Swal.fire({
    title: "Muchas gracias por su compra!",
    text: "Pago aprobado",
    imageUrl:
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660940366/Logo_hogar_y_deco_organico_gris_zuadar.png",
    imageWidth: 400,
    imageHeight: 250,
    imageAlt: "Custom image",
  });
}
