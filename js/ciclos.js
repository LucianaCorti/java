///Tienda Online\

function ingresoDatos() {
  alert("Bienvenida/o a la tienda online Bali");
  let nombreUsuario = prompt("Ingrese su nombre");
  while (nombreUsuario === "") {
    nombreUsuario = prompt("Para continuar debe ingresar su nombre:");
  }
}

function catalogoProductos() {
  let productoCatalogo;
  do {
    productoCatalogo = prompt(
      " Productos disponibles: 1- Vela aroma vainilla  2- Sahumerios aroma coco  3- Difusor aroma lima  4- Humidificador"
    );
  } while (
    productoCatalogo != 1 &&
    productoCatalogo != 2 &&
    productoCatalogo != 3 &&
    productoCatalogo != 4
  );
  switch (productoCatalogo) {
    case "1":
      return listaProductos[0];
    case "2":
      return listaProductos[1];
    case "3":
      return listaProductos[2];
    case "4":
      return listaProductos[3];
  }
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
      ProductosTienda.nombre.toLowerCase() +
      "Precio $ " +
      ProductosTienda.precio
  );
  let pago = prompt("Con cuánto va a abonar ? ");
  if (pago > ProductosTienda.precio) {
    alert(
      "Su vuelto es $" +
        (pago - ProductosTienda.precio) +
        ",Muchas gracias por su compra!"
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
