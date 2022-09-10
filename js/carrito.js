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

//Operador ternario
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

const crearFormPago = () => {
  const formPago = document.querySelector(".formularioPago");
  formPago.innerHTML = ` <div class="formularioPago">      
    <h3 class="text-center text-decoration-underline m-3 text-dark">Finalizar compra</h3>  
      <div>
            <p>
                <span class="obligatorio">*</span>
                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Nombre y apellido">
            </p>
            </div>
            <div>
            <p>
                <span class="obligatorio">*</span>
                <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Email">
            </p>   
            </div>    
            <div>
            <p>
                <span class="obligatorio">*</span>
                <input type="tel" name="introducir_email" id="email" required="obligatorio" placeholder="Número de tarjeta">
            </p>   
            <p>
            <span class="obligatorio">*</span>
            <input type="date" name="introducir_email" id="email" required="obligatorio" placeholder="Vencimiento">
        </p>  
        
            </div>              
          <button type="button" class="btn btn-dark m-3 float-end" id="botonEnviar">Comprar</button>
      </form>
</div>`;
};
crearFormPago();
