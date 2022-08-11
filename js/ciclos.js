///Tienda Online\

function ingresoDatos() {
  alert("Bienvenida/o a la tienda online Bali");
  let nombreUsuario = prompt("Por favor ingrese su nombre:");
  while (nombreUsuario === "" || nombreUsuario === null) {
    nombreUsuario = prompt("Para continuar debe ingresar su nombre:");
  }
}

function catalogoProductos() {
  let productoCatalogo;
  do {
    productoCatalogo = prompt(
      " Productos disponibles: \n1- Vela aroma vainilla  \n2- Sahumerios aroma coco  \n3- Difusor aroma lima  \n4- Humidificador"
    );
  } while (
    productoCatalogo != 1 &&
    productoCatalogo != 2 &&
    productoCatalogo != 3 &&
    productoCatalogo != 4
  );
  let productoEncontrado = listaProductos.find(
    (producto) => producto.id == productoCatalogo
  );
  return productoEncontrado;
}

class ProductosTienda {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const listaProductos = [];

function agregandoArray() {
  listaProductos.push(new ProductosTienda(1, "Vela aroma vainilla", 800));
  listaProductos.push(new ProductosTienda(2, "Sahumerio aroma coco", 650));
  listaProductos.push(new ProductosTienda(3, "Difusor aroma lima", 780));
  listaProductos.push(new ProductosTienda(4, "Humidificador", 1200));
}

function cobroFinal(ProductosTienda) {
  alert(
    "Seleccionó el siguiente producto : " +
      ProductosTienda.nombre.toUpperCase() +
      "" +
      "\nPRECIO $ " +
      ProductosTienda.precio
  );
  let pago = prompt("Con cuánto va a abonar ? ");
  if (pago > ProductosTienda.precio) {
    alert(
      "Su vuelto es $" +
        (pago - ProductosTienda.precio) +
        "\nMuchas gracias por su compra!"
    );
  } else if (pago == ProductosTienda.precio) {
    alert("Muchas gracias por abonar exacto!");
  }
  if (pago < ProductosTienda.precio)
    alert("Quitaremos el producto de tu carrito por falta de pago!");
}

ingresoDatos();
agregandoArray();
let productoSeleccionado = catalogoProductos();
cobroFinal(productoSeleccionado);
