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
class ProductosTienda {
  constructor(foto, nombre, descripcion, precio, id) {
    this.foto = foto;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.id = id;
  }
}

const listaProductos = [];

const agregandoArray = () => {
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660933176/hanna-balan-YasQvzPbGOQ-unsplash_1_pfna0z.jpg",
      "Vela en cuenco de cerámica",
      "Vela de cera de soja",
      800,
      1
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660933257/shashi-chaturvedula-0olnnoM1ieM-unsplash_1_wm58tz.jpg",
      "Sahumerios aroma a coco",
      "Pack por 6 unidades",
      780,
      2
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660933747/oriento-Kmoc9lIexUc-unsplash_1_elsbpk.jpg",
      "Sahumador",
      "Sahumador de cerámica",
      1200,
      3
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660936126/content-pixie-LIWTop_QiQE-unsplash_1_j27n0q.jpg",
      "Palo Santo",
      "Pack por 3 unidades",
      650,
      4
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660935288/volant-P3nC8BaYKZs-unsplash_1_hblzvu.jpg",
      "Humidificador",
      "Humidificador eléctrico",
      1600,
      5
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660938027/susanna-marsiglia-9Doy0urDBko-unsplash_1_gbpslo.jpg",
      "Porta Sahumerio",
      "Porta Sahumerio de cerámica",
      850,
      6
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660937712/no-revisions-OAW0OCLn52I-unsplash_1_eiqjc4.jpg",
      "Vela parafina",
      "Vela de parafina en envase de vidrio",
      800,
      7
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660938764/ray-kakte-vCc-F97wkHk-unsplash_1_btzfex.jpg",
      "Porta Conitos",
      "Porta Conitos realizado en cerámica",
      860,
      8
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660934916/pim-chayada-ko7osEfy4xo-unsplash_1_xai8nd.jpg",
      "Difusor",
      "Varillas aromatizantes",
      860,
      9
    )
  );
};

agregandoArray();
//Productos ordenados
const ordenarProductos = () => {
  listaProductos.sort((a, b) => {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
  });
};
ordenarProductos();

//Cards
const crearTablaProductos = () => {
  const tarjeta = document.querySelector(".cardProductos");
  listaProductos.forEach((producto) => {
    tarjeta.innerHTML += `<div class="card">
    <img class="card-img-top" src=${producto.foto}>
    <div class="card-body">
      <h5 class="card-title text-decoration-underline">${producto.nombre}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text">$${producto.precio}</p>
      <button type="button" class="btn btn-dark m-3 fs-6" id="btnCards${producto.id}">Añadir al carrito</button>
    </div>
    </div>
    `;
  });
  funcionBotones();
};

crearTablaProductos();

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

const confirmacionEmail = () => {
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
