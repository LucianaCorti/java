//Operados Or
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

//Formulario pago
const formPago = document.querySelector(".formularioPago");

if (document.title === "Carrito") {
  if (carritoCompras.length >= 1) {
    const crearFormPago = () => {
      formPago.innerHTML = ` <div class="formularioPago">      
    <h3 class="text-center text-decoration-underline m-3 text-dark">Finalizar compra</h3>  
    <form>
      <div>
            <p>
                <span class="obligatorio">*</span>
                <input type="text" name="introducir_nombre" id="nombrePago" required="obligatorio" placeholder="Nombre y apellido">
            </p>
            </div>
            <div>
            <p>
                <span class="obligatorio">*</span>
                <input type="email" name="introducir_email" id="emailPago" required="obligatorio" placeholder="Email">
            </p>   
            </div>    
            <div>
            <p>
                <span class="obligatorio">*</span>
                <input type="tel" name="introducir_email" id="numTarjeta" required="obligatorio" placeholder="Número de tarjeta">
            </p>   
            <p>
            <span class="obligatorio">*</span>
            <input type="date" name="introducir_email" id="fechaVencimiento" required="obligatorio" placeholder="Vencimiento">
        </p>  
            </div>              
            <button type="submit" class="btn btn-dark m-3 float-end" id="botonComprar">Comprar</button>
            </form>
    </div>`;
    };
    crearFormPago();
    const nombrePago = document.querySelector("#nombrePago");
    const emailPago = document.querySelector("#emailPago");
    const numTarjeta = document.querySelector("#numTarjeta");
    const fechaVencimiento = document.querySelector("#fechaVencimiento");
    const botonComprar = document.querySelector("#botonComprar");
    finalizarCompra(
      nombrePago,
      emailPago,
      numTarjeta,
      fechaVencimiento,
      botonComprar
    );
  }
}

function finalizarCompra(
  nombrePago,
  emailPago,
  numTarjeta,
  fechaVencimiento,
  botonComprar
) {
  if (
    nombrePago.value !== "" &&
    emailPago.value !== "" &&
    numTarjeta.value !== "" &&
    fechaVencimiento.value !== ""
  ) {
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
