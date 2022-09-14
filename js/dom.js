//Titulo
let tituloPrincipal = document.getElementById("tituloPrincipal");
tituloPrincipal.innerText = "Tienda Online";

const crearSubtitulo = () => {
  const subtitulo = document.getElementById("subtitulo");
  subtitulo.innerHTML =
    "<p>A continuación vas a poder seleccionar los productos deseados:</p>";
};
crearSubtitulo();

//Array productos
let listaProductos = [];
const tarjeta = document.querySelector(".cardProductos");
let tarjetasArray = "";
const spinner = document.querySelector(".divLoader");

//Cards
const crearTablaProductos = (producto) => {
  return (tarjeta.innerHTML += `<div class="card">
    <img class="card-img-top" src=${producto.foto}>
    <div class="card-body">
      <h5 class="card-title text-decoration-underline">${producto.nombre}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text">$${producto.precio}</p>
      <button type="button" class="btn btn-dark m-3 fs-6" id="btnCards${producto.id}">Añadir al carrito</button>
    </div>
    </div>
    `);
};

const cargarProductos = async () => {
  await fetch("js/productos.json")
    .then((Response) => Response.json())
    .then((data) => {
      listaProductos = data;
      listaProductos.forEach(
        (producto) => (tarjetasArray += crearTablaProductos(producto))
      );
      spinner.innerHTML = "";
    });
  funcionBotones();
};
cargarProductos();

function funcionBotones() {
  listaProductos.forEach((producto) => {
    document
      .querySelector(`#btnCards${producto.id}`)
      .addEventListener("click", () => {
        carrito(producto);
      });
  });
}

const carrito = (producto) => {
  let agregado = carritoCompras.some((prod1) => prod1.id === producto.id);
  if (agregado === false) {
    producto.cantidad = 1;
    carritoCompras.push(producto);
  } else {
    let prod2 = carritoCompras.find((prod2) => prod2.id === producto.id);
    prod2.cantidad++;
  }
  agregarAlCarrito();
  confirmacion();
};

//Confirmacion de productos en el carrito
const confirmacion = () => {
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
    icon: "success",
    title: "Agregado al carrito",
  });
};
