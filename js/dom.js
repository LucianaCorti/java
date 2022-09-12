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

//Form
const crearForm = () => {
  const formDatos = document.querySelector(".contact_form");
  formDatos.innerHTML = ` <div class="formulario">      
    <h3 class="text-center">Te quedaron dudas? Escribinos!</h3>
      <form action="submeter-formulario.php" method="post">       
            <p>
              <label for="nombre" class="colocar_nombre">Nombre
                <span class="obligatorio">*</span>
              </label>
                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Nombre">
            </p>
            <p>
              <label for="email" class="colocar_email">Email
                <span class="obligatorio">*</span>
              </label>
                <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Email">
            </p>   
            <p>
              <label for="mensaje" class="colocar_mensaje">Mensaje
                <span class="obligatorio">*</span>
              </label>                     
              <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Comentario"></textarea> 
            </p> 
            <button type="button" class="btn btn-dark m-3 float-end" id="botonBorrar">Borrar datos</button>                   
          <button type="button" class="btn btn-dark m-3 float-end" id="botonEnviar">Enviar</button>
      </form>
</div>`;
};
crearForm();

//Local Storage Form
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const boton = document.querySelector("#botonEnviar");
const botonBorrar = document.querySelector("#botonBorrar");

function datosForm() {
  localStorage.setItem("nombre formulario", nombre.value);
  localStorage.setItem("email formulario", email.value);
  localStorage.setItem("mensaje formulario", mensaje.value);
  borrarDatos();
}
datosForm();

boton.addEventListener("click", datosForm);
boton.addEventListener("click", confirmacionEmail);


function confirmacionEmail() {
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
    title: "Mensaje Enviado",
  });
}

//Recuperar datos Form
function recuperarDatos() {
  nombre.value = localStorage.getItem("nombre formulario");
  email.value = localStorage.getItem("email formulario");
  mensaje.value = localStorage.getItem("mensaje formulario");
}
recuperarDatos();

//Borrar datos
function borrarDatos() {
  nombre.value = "";
  email.value = "";
  mensaje.value = "";
}
borrarDatos();
botonBorrar.addEventListener("click", borrarDatos);

//Fondos input
const fomularios = document.querySelectorAll("input");
function fondoInput() {
  fomularios.forEach((formulario) => {
    formulario.addEventListener("click", () => {
      formulario.className = "fondoColor1";
    });
    formulario.addEventListener("blur", () => {
      formulario.className = "fondoColor2";
    });
  });
}
fondoInput();

